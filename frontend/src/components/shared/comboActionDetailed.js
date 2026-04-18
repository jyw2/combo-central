import { CharacterContext } from "../../context/characterContext";

import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  FormHelperText,
  Stack,
  Typography
} from "@mui/material";
import { useContext } from "react";
import ComboPiece from "../shared/comboPiece";
import Comment from "../shared/comment";
import ComboOverflowWrapper from "./comboOverflowWrapper";

function permuteInputVariants(inputPieceVariants) {
  if (inputPieceVariants.length === 1) {
    return inputPieceVariants[0].map((ipv) => [ipv])
  } else {
    let variantStubs = permuteInputVariants(inputPieceVariants.slice(1))
    let variants = []
    for (let variantStub of variantStubs) {
      for (let inputPieceVariant of inputPieceVariants[0]) {
        variants.push([inputPieceVariant, ...variantStub])
      }
    }

    return variants
  }
}

function getSplitComboVariants(comboPiece) {
  if (!comboPiece?.input) return []
  const allInputPieceVariants = []

  for (let inputPiece of comboPiece.input) {
    let inputPieceVariants = []
    for (let inputSet of inputPiece) {
      for (let command of inputSet.command) {
        for (let buttonList of inputSet.buttons) {
          let variantInputs = [structuredClone(inputSet)]
          variantInputs[0].buttons = [structuredClone(buttonList)]
          variantInputs[0].command = [structuredClone(command)]
          inputPieceVariants.push(variantInputs)
        }
      }
    }
    allInputPieceVariants.push(inputPieceVariants)
  }

  return permuteInputVariants(allInputPieceVariants).map((iv) => {
    let variant = structuredClone(comboPiece)
    variant.input = iv
    return variant
  })
}

export default function ComboActionDetailed(props) {
  const theme = useTheme();
  const characterContext = useContext(CharacterContext);
  const { comboPiece } = props;

  function renderSidePanelChip(value, key = 0) {
    return (
      <Chip
        key={key}
        size="small"
        label={value}
        sx={{ mx: 1 }}
        style={{
          borderRadius: "3px",
          backgroundColor: characterContext.characterData.secondaryColor,
          color: theme.palette.text.secondary,
          margin: "2px",
        }}
      />
    );
  }

  function getOrDivider() {
    return (
      <div style={{ position: "relative", width: "100%", overflow: "visible", height: "0px" }}>
        <Typography style={{
          // position: "absolute",
          top: "-10px", left: "10px",
          fontSize: "12px",
          // backgroundColor: characterContext.characterData.color,
          paddingLeft: "8px", paddingRight: "8px",
          marginTop: "-10px"
        }}>OR</Typography>
      </div>
    )
  }

  return (
    <Card
      raised
      style={{ marginTop: "8px", position: "relative", overflow: "visible" }}
    >
      <CardContent>
        <div style={{ position: "absolute", top: "-15px", left: "20px" }}>
          <Typography
            align="left"
            style={{ fontWeight: "bold", fontSize: "25px" }}
          >
            {comboPiece.name.toUpperCase()}
          </Typography>
        </div>

        <Stack spacing={1} style={{ marginTop: "10px", overflow: "visible", }} >
          <ComboOverflowWrapper>
            <Stack spacing="1px" className="custom-scroll-container" divider={getOrDivider()} alignItems="start" style={{ overflow: "auto", maxHeight: "30vh" }}>
              {getSplitComboVariants(comboPiece).map((c, index) =>
                <Box
                  style={{
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    paddingLeft: "10px", paddingRight: "10px",
                    backgroundColor: theme.palette.anchor.dark,
                    minWidth: "100%",
                    width: "fit-content",
                    boxSizing: "border-box",
                  }}
                  key={index}
                >
                  <ComboPiece comboPiece={c} noCollapse></ComboPiece>
                </Box>)}
            </Stack>
          </ComboOverflowWrapper>

          {comboPiece?.playerState ? (
            <Stack direction="row" flexWrap="wrap" justifyContent="start">
              {comboPiece?.playerState.map((detail, index) =>
                renderSidePanelChip(detail, index)
              )}
            </Stack>
          ) : null}
          {comboPiece.tips ? (
            <div style={{ marginTop: "20px" }}>
              <FormHelperText
                align="left"
                style={{ margin: 0, marginBottom: "5px", fontWeight: "bold", fontSize: "16px" }}
              >
                TIPS
              </FormHelperText>
              <Comment
                comment={{
                  comment: comboPiece.tips,
                }}
              />
            </div>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
