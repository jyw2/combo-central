import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  Button,
  Stack,
  Alert,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useState, useContext, useEffect, forwardRef } from "react";
import { INSERT_COMBO_ACTION_COMMAND } from "./ComboActionsPlugin";
import { FOCUS_COMMAND, BLUR_COMMAND, COMMAND_PRIORITY_LOW } from "lexical";
import { ComboPieceUtil } from "util/comboPieceUtil";
import { useTheme } from "@emotion/react";
import EditComboPiece from "../editComboPiece";
import { CharacterContext } from "context/characterContext";
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ToolbarPlugin() {
  const theme = useTheme()
  const [editor] = useLexicalComposerContext();
  const [hasFocus, setFocus] = useState(false)
  useEffect(
    () =>
      editor.registerCommand(
        BLUR_COMMAND,
        () => {
          setTimeout(() => setFocus(false), 200)
          return false
        },
        COMMAND_PRIORITY_LOW
      ),
    []
  )

  useEffect(
    () =>
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          setFocus(true)
          return false
        },
        COMMAND_PRIORITY_LOW
      ),
    []
  )

  const characterContext = useContext(CharacterContext);

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleOpen(open) {
    resetAction()
    setOpen(open);
    if (open) {
      setErrorMessage(null);
    }
  }
  const handleClose = () => {
    handleOpen(false);
  };

  // dialog state
  let emptyPiece = ComboPieceUtil.getEmptyPiece();
  const [name, setName] = useState(emptyPiece.name);
  const [inputs, setInputs] = useState(emptyPiece.input);
  const [presetId, setPresetId] = useState(emptyPiece.presetId)
  const [playerState, setPlayerState] = useState(emptyPiece.playerState);

  function selectPresetPiece(preset) {
    setName(preset.name);
    setInputs(structuredClone(preset.input));
    setPlayerState(preset.playerState ? structuredClone(preset.playerState) : []);
    setPresetId(preset.presetId)
  }

  function resetAction() {
    setInputs(emptyPiece.input)
    setName(emptyPiece.name)
    setPresetId(emptyPiece.presetId)
    setPlayerState(emptyPiece.playerState)
  }

  function saveComboPiece() {
    setErrorMessage(null);
    if (ComboPieceUtil.isComboPieceEmpty(inputs)) {
      setErrorMessage("Can't create empty combo piece");
      return;
    }
    let action = ComboPieceUtil.getEmptyPiece();
    action.name = name;
    action.input = inputs;
    action.playerState = playerState;
    action.presetId = presetId;

    editor.dispatchCommand(INSERT_COMBO_ACTION_COMMAND, {
      comboAction: action,
      inline: true,
    });

    handleOpen(false);
    setTimeout(() => editor.focus(), 100);
  }

  return (
    <>
      {/* Combo Action Dialog */}
      <Dialog open={open} TransitionComponent={Transition}
        keepMounted onClose={handleClose} maxWidth={"xl"}>
        <DialogContent className="custom-scroll-container" style={{ backgroundColor: theme.palette.background.dark }}>
          <EditComboPiece
            saveText="Save"
            name={name}
            playerStates={playerState}
            setPlayerStates={setPlayerState}
            setName={setName}
            inputs={inputs}
            setInputs={setInputs}
            selectPresetPiece={selectPresetPiece}
            ignoreDependencies
            noTips
            handleClose={handleClose}
            saveComboPiece={saveComboPiece}
            presetId={presetId}
            resetAction={resetAction}
            titlePrefix="TEXT"
            shrink
          />
        </DialogContent>
        {errorMessage ? (
          <Alert style={{ margin: "3px" }} severity="error">
            {errorMessage}
          </Alert>
        ) : null}
      </Dialog>

      {/* BAR */}
      <Stack direction="row" style={{ padding: "6px 0px" }}>
        {" "}
        <Button
          style={{
            backgroundColor: characterContext.characterData.color,
            fontSize: "11px",
            padding: "2px 8px",
            borderRadius: "2px",
          }}
          aria-label="account"
          variant="contained"
          // disabled={!hasFocus}
          onClick={() => {
            handleOpen(true);
          }}
        >
          + Insert combo action
        </Button>
      </Stack>
    </>
  );
}
