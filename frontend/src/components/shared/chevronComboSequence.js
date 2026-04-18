import { Stack } from "@mui/material";
import { ComboRenderContext } from "context/comboRenderContext";
import { useContext } from "react";
import ComboRenderUtil from "util/comboRenderUtil";
import ComboOverflowWrapper from "./comboOverflowWrapper";
import ComboPieceChevron from "./comboPieceChevron";
export default function ChevronComboSequence(props) {
  const comboRenderContext = useContext(ComboRenderContext)
  function renderAddPiece() {
    if (props.handleNewPiece) {
      return (
        <div onClick={props.handleNewPiece}>
          <ComboPieceChevron
            max={props.comboPieces.length}
            index={props.comboPieces.length}
            addChevron={true}
            text={"+"}
            setSelection={() => { }}
          />
        </div>
      );
    }
  }
  const extraSmall = comboRenderContext.comboSize === ComboRenderUtil.ComboSize.EXTRA_SMALL
  const small = comboRenderContext.comboSize === ComboRenderUtil.ComboSize.SMALL

  return (
    <Stack sx={{ pl: 2, }} style={{boxSizing:"border-box"}}>
      <ComboOverflowWrapper>
        <Stack
          direction="row"
          sx={{
            flexWrap: props.oneLine ? "" : "wrap", pl: extraSmall ? 2 : small ? 3 : 3,
          }}
          style={{
            pointerEvents: props.readonly ? "none" : "",
            paddingBottom: extraSmall ? "10px" : small ? "10px" : 0,
            boxSizing: "border-box"
          }}
        >
          {props.comboPieces.map((comboPiece, index) => {
            return (
              <ComboPieceChevron
                max={
                  props.handleNewPiece
                    ? props.comboPieces.length
                    : props.comboPieces.length - 1
                }
                index={index}
                comboPiece={comboPiece}
                key={index}
                setSelection={props.setSelection}
                selected={props.selection === index}
              />
            );
          })}
          {renderAddPiece()}
          <div style={{ flexGrow: 100 }}></div>
        </Stack>
      </ComboOverflowWrapper>
    </Stack>
  );
}
