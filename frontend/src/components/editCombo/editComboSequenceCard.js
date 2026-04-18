import React from "react";
import { Alert } from "@mui/material";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useRef, useState } from "react";
import { EditComboPageContext } from "../../context/editComboPageContext";
import { ComboPieceUtil } from "../../util/comboPieceUtil";
import ChevronComboSequence from "../shared/chevronComboSequence";
import ButtonRenderSelectorRow from "../shared/comboRenderSelectorRow";
import EditComboPiece from "./editComboPiece";

function EditComboSequenceCard(props) {
  const [selection, setSelection] = useState(null);
  const editComboPageContext = useContext(EditComboPageContext);
  const theme = useTheme();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  // dialog state
  let emptyPiece = ComboPieceUtil.getEmptyPiece();
  const [name, setName] = useState(emptyPiece.name);
  const [tips, setTips] = useState(emptyPiece.tips);
  let tipsRef = useRef(emptyPiece.tips);
  const [inputs, setInputs] = useState(emptyPiece.input);
  const [playerStates, setPlayerStates] = useState(emptyPiece.playerState)
  const [presetId, setPresetId] = useState(emptyPiece.presetId)

  function saveComboPiece() {
    setErrorMessage(null);
    if (ComboPieceUtil.isComboPieceEmpty(inputs)) {
      setErrorMessage("Can't create empty combo piece");
      return;
    }
    let original = props.comboPieces[selection];
    original.name = name;
    original.tips = tipsRef.current;
    original.input = inputs;
    original.playerState = playerStates;
    original.presetId = presetId;

    props.setComboPieces([...props.comboPieces]);
    handleOpen(false);
  }

  function selectPresetPiece(preset) {
    setName(preset.name);
    setInputs(structuredClone(preset.input));
    setPlayerStates(structuredClone(preset.playerState))
    setPresetId(preset.presetId)
  }

  // end dialog state

  function handleNewPiece(event) {
    const newPieceIndex = props.comboPieces.length;
    const emptyPiece = ComboPieceUtil.getEmptyPiece();

    props.comboPieces.push(emptyPiece);
    props.setComboPieces([...props.comboPieces]);
    setName(emptyPiece.name);
    setTips(emptyPiece.tips);
    setInputs(emptyPiece.input);
    setSelection(newPieceIndex);
    handleOpen(true);
  }
  
  function handleDelete(index) {
    props.comboPieces.splice(index, 1);
    props.setComboPieces(props.comboPieces);
    handleOpen(false);
  }

  const handlePieceClick = (index) => {
    setSelection(index);
    setName(props.comboPieces[index].name);
    setTips(props.comboPieces[index]?.tips);
    setInputs(props.comboPieces[index]?.input);
    setPresetId(props.comboPieces[index]?.presetId);
    handleOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  function handleOpen(open) {
    setOpen(open);
    if (open) {
      setErrorMessage(null);
    }
  }
  const handleClose = () => {
    const original = props.comboPieces[selection];
    if (ComboPieceUtil.isComboPieceEmpty(original.input)) {
      handleDelete(selection);
    } else {
      handleOpen(false);
    }
  };

  const [errorMessage, setErrorMessage] = useState(null);

  function resetAction(){
    setInputs(emptyPiece.input)
    setName(emptyPiece.name)
    setPresetId(emptyPiece.presetId)
    setPlayerStates(emptyPiece.playerState)
  }


  return (
    <Card sx={{ p: 4, overflow: "visible", position: "relative" }}>
      <div style={{ height: "1px" }}>
        <Typography
          style={{
            fontSize: "25px",
            position: "absolute",
            fontWeight: "bold",
            top: "-15px",
            left: "15px",
          }}
        >
          {props.editType === "create" ? "CREATE" : "EDIT"} COMBO
        </Typography>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth={"xl"} >
        <DialogContent className="custom-scroll-container" style={{backgroundColor: theme.palette.background.dark}}  >
          <EditComboPiece
            saveText="Save To Combo"
            name={name}
            setName={setName}
            presetId={presetId}
            resetAction={resetAction}
            tips={tips}
            tipsRef={tipsRef}
            inputs={inputs}
            setInputs={setInputs}
            selectPresetPiece={selectPresetPiece}
            playerStates={playerStates}
            setPlayerStates={setPlayerStates}
            precedingPresetIds={props.comboPieces
              .slice(0, selection)
              .map((p) => p.presetId)}
            handleClose={handleClose}
            handleDelete={() => handleDelete(selection)}
            saveComboPiece={saveComboPiece}
            setPresetId={setPresetId}
            titlePrefix="COMBO"
          />
        </DialogContent>
        {errorMessage ? (
          <Alert style={{ margin: "3px" }} severity="error">
            {errorMessage}
          </Alert>
        ) : null}
      </Dialog>

      <Stack alignItems="start">
        <ButtonRenderSelectorRow collapsible={!largeScreenSize} />
      </Stack>
      {/* <Stack direction="row" spacing={1} sx={{ margin: "auto" }}>
        <Typography variant="p" align="left" style={{ fontSize: "14px" }}>
          Click the + below to add to the combo
        </Typography>
      </Stack> */}


      <ChevronComboSequence
        comboPieces={props.comboPieces}
        setSelection={handlePieceClick}
        handleNewPiece={handleNewPiece}
      />
    </Card>
  );
}

export default EditComboSequenceCard;
