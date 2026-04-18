import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { ComboRenderContext } from "context/comboRenderContext";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import ComboRenderUtil from "util/comboRenderUtil";
import { CharacterContext } from "../../context/characterContext";
import ComboPiece from "../shared/comboPiece";
import { TextComboButton } from "./comboButton";

export default function ComboPieceChevron(props) {
  const characterContext = useContext(CharacterContext);
  const theme = useTheme();
  const [displayName, setDisplayName] = useState(null);
  let { index, addChevron, max, selected, stretchShowAllText, noFlexGrow, } = props;
  const [maxWidth, setWidth] = useState(null);
  const comboRenderContext = useContext(ComboRenderContext)
  const extraSmall = comboRenderContext.comboSize === ComboRenderUtil.ComboSize.EXTRA_SMALL
  const small = comboRenderContext.comboSize === ComboRenderUtil.ComboSize.SMALL

  const nameRef = useRef(null);
  const stateRef = useRef(null);

  const color = selected
    ? theme.palette.anchor.dark
    : index % 2 === 0
      ? characterContext.characterData.color
      : characterContext.characterData.darkColor;
  const secondaryColor =
    index % 2 === 0 ? characterContext.characterData.darkColor : characterContext.characterData.color;

  let triangleWidth
  if (extraSmall) {
    triangleWidth = 30
  } else if (small) {
    triangleWidth = 45
  }
  else {
    triangleWidth = 60
  }

  const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: `${triangleWidth / 2}px solid transparent`,
    borderRight: `${triangleWidth / 2}px solid transparent`,
    borderBottom: `${triangleWidth / 2}px solid ${color}`,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: `-${triangleWidth / 4.5}px`,
    marginLeft: `-${triangleWidth / 3.8}px`,
    zIndex: 3,
    transformOrigin: "center center",
    transform: "rotate(90deg)",

    cursor: "pointer",
  };
  const enderStyle = {
    cursor: "pointer",
    backgroundColor: color,
    height: `${triangleWidth}px`,
    width: `${triangleWidth / 2}px`,
    borderRadius: "0px 4% 4% 0px",
    marginLeft: `-2px`,
    zIndex: 1,
  };
  let smallWidth = triangleWidth / 1.4142;
  let halfWidth = triangleWidth / 2;

  function renderTails() {
    // if (index != 0) {
    return (
      <div
        style={{
          cursor: "pointer",
          backgroundColor: color,
          height: `${triangleWidth}px`,
          width: `${triangleWidth / 2}px`,
          marginLeft: `-${triangleWidth / 2}px`,
          zIndex: 1,
        }}
      />
    );
    // }
  }
  function renderPiece() {
    if (addChevron) {
      return (
        <div style={{ paddingRight: "2px" }}>
          <TextComboButton text={props.text} />
        </div>
      );
    } else {
      return <ComboPiece {...props} small={extraSmall} medium={small} />;
    }
  }

  let nameStyle = {
    fontSize: extraSmall ? "9px" : "11px",
    fontWeight: extraSmall || small ? "" : "bold",
    textOverflow: stretchShowAllText ? "" : "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    zIndex: "5",
  };
  let nameBoxStyle = {
    position: "absolute",
    top: small ? "-0.55em" : "-0.5em",
    left: "-1em",
    padding: "0px 0.4em",
    borderRadius: "1px",
    zIndex: 5,

    maxWidth: stretchShowAllText ? "" : "80%",
    backgroundColor: secondaryColor,
  };

  let stateStyle = {
    fontSize: extraSmall ? "9px" : "10px",
    color: theme.palette.text.dark,
    fontWeight: extraSmall ? "" : "bold",
    textOverflow: stretchShowAllText ? "" : "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  };
  let stateBoxStyle = {
    position: "absolute",
    bottom: "-0.4em",
    left: "-1em",
    padding: "0px 0.4em",
    zIndex: 5,
    maxWidth: stretchShowAllText ? "" : "92%",
  };

  function renderName() {
    if (props?.comboPiece?.name) {
      return (
        <div style={nameBoxStyle}>
          {" "}
          <Typography style={nameStyle} ref={nameRef}>
            {props?.comboPiece?.name.toUpperCase()}
          </Typography>{" "}
        </div>
      );
    }
    //  else if (displayName) {
    //     return <Typography style={nameStyle}>{displayName.toUpperCase()}</Typography>
    // }
  }
  function renderPlayerState() {
    if (props?.comboPiece?.playerState?.length) {
      return (
        <div style={stateBoxStyle} ref={stateRef}>
          {" "}
          <Typography style={stateStyle}>
            {props.comboPiece.playerState.join(" + ").toUpperCase()}
          </Typography>{" "}
        </div>
      );
    }
  }

  const actionsRef = useRef();
  const getMaxWidth = () => {
    return Math.max(
      actionsRef?.current?.offsetWidth ?? 0,
      nameRef?.current?.offsetWidth ?? 0,
      stateRef?.current?.offsetWidth ?? 0
    );
  };

  useLayoutEffect(() => {
    setWidth(getMaxWidth);
  }, [
    actionsRef?.current?.offsetWidth,
    nameRef?.current?.offsetWidth,
    stateRef?.current?.offsetWidth,
  ]);

  function getBottomMargin() {
    let margin = extraSmall ? 4 : small ? 6 : 6
    if (comboRenderContext?.hideActionName) {
      margin = margin - 4 
    }
    return `${margin}px`
  }

  return (
    <Stack
      direction="row"
      style={{
        marginBottom: getBottomMargin(),
        marginTop: "10px",
        position: "relative",
        flexGrow: 1,
        overflow: "visible",
        minWidth: stretchShowAllText ? maxWidth * 1.1 : null,
        boxSizing:"border-box"
      }}
      onClick={() => props.setSelection(index)}
    >
      {renderTails()}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          position: "relative",
          paddingLeft: "6px",
          flexGrow: noFlexGrow ? 0 : 1,
          cursor: "pointer",
          borderRadius: "0px 3px 3px 0px",
          backgroundColor: color,
          height: `${triangleWidth}px`,
          zIndex: "1",
        }}
      >
        <div ref={actionsRef} style={{ zIndex: 1 }}>
          {renderPiece()}
        </div>
      </Box>
      {!comboRenderContext?.hideActionName ? renderName() : null}
      {renderPlayerState()}
      <div style={index !== max ? triangleStyle : enderStyle} />
    </Stack>
  );
}
