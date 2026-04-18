import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { useContext, useRef } from "react";
import { CharacterContext } from "../../context/characterContext";
import { TextComboButton } from "./comboButton";

export default function Chevron(props) {
  const characterContext = useContext(CharacterContext);
  const theme = useTheme();
  let {
    index,
    addChevron,
    max,
    secondaryColor,
    height,
    primaryColor,
    grow,
    imageBG,
    notCenter,
    loudImage
  } = props;

  const primaryColorDisplay = primaryColor ?? theme.palette.anchor.dark;

  const triangleWidth = height;
  const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: `${triangleWidth / 2}px solid transparent`,
    borderRight: `${triangleWidth / 2}px solid transparent`,
    borderBottom: `${triangleWidth / 2}px solid ${index % 2 == 0 ? secondaryColor : primaryColorDisplay
      }`,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: `-${triangleWidth / 4.5}px`,
    marginLeft: `-${triangleWidth / 3.8}px`,
    zIndex: 3,
    transformOrigin: "center center",
    transform: "rotate(90deg)",
  };
  const enderStyle = {
    cursor: "pointer",
    backgroundColor: index % 2 == 0 ? secondaryColor : primaryColorDisplay,
    height: `${triangleWidth}px`,
    width: `${triangleWidth / 2}px`,
    borderRadius: "0px 4% 4% 0px",
    marginLeft: `-2px`,
  };
  let smallWidth = triangleWidth / 1.4142;
  let halfWidth = triangleWidth / 2;

  function renderTails() {
    // if (index != 0) {
    return (
      <div
        style={{
          cursor: "pointer",
          backgroundColor:
            index % 2 == 0 ? secondaryColor : primaryColorDisplay,
          height: `${triangleWidth}px`,
          width: `${triangleWidth / 2}px`,
          marginLeft: `-${triangleWidth / 2}px`,
        }}
      />
    );
    // }
  }
  function renderPiece() {
    if (addChevron) {
      return (
        <div style={{ paddingRight: "2px", zIndex: 5 }}>
          <TextComboButton text={props.text} />
        </div>
      );
    } else {
      return (
        <Box
          style={{
            backgroundColor:
              index % 2 == 0 ? secondaryColor : primaryColorDisplay,
            height: `${triangleWidth}px`,
            flexGrow: 1,
          }}
        >
          {imageBG ?
            <div style={{
              borderRadius: "0px 4% 4% 0px", marginLeft: `-${triangleWidth / 2}px`, position: "absolute", overflow: "hidden", top: 0, left: 0, height: "100%", width: "100%"
            }}>
              <div style={{ position: "absolute", width: "100%", height: "100%", top: "60%", left: 0, opacity: loudImage? 0.6: 0.2, zIndex: 1 }}>
                {imageBG}
              </div>

              <div style={{
                position: "absolute", width: "100%", height: "100%", top: 0,
                left: 0, zIndex: 2,
                pointerEvents: "none",
                background: `linear-gradient(to right, transparent , 90%,${index % 2 == 0 ? secondaryColor : primaryColorDisplay}  )`
              }} />
            </div> : null
          }

          <Stack alignItems={notCenter ? "" : "center"} justifyContent={notCenter ? "" : "center"} style={{ zIndex: 5, position: "relative", pointerEvents: "none", height: "100%", width: "100%" }}>
            {props.children}
          </Stack>
        </Box>
      );
    }
  }

  let nameStyle = {
    fontSize: "11px",
    fontWeight: "bold",
  };
  let nameBoxStyle = {
    position: "absolute",
    top: "-0.5em",
    left: "-1em",
    padding: "0px 0.4em",
    borderRadius: "1px",
    backgroundColor: index % 2 == 0 ? primaryColorDisplay : secondaryColor,
  };

  let stateStyle = {
    fontSize: "10px",
    color: theme.palette.text.dark,
    fontWeight: "bold",
  };
  let stateBoxStyle = {
    position: "absolute",
    bottom: "-0.4em",
    left: "-1em",
    padding: "0px 0.4em",
  };

  function renderName() {
    if (props?.comboPiece?.name) {
      return (
        <div ref={titleRef} style={nameBoxStyle}>
          {" "}
          <Typography style={nameStyle}>
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
    if (props?.comboPiece?.playerState.length > 0) {
      return (
        <div ref={titleRef} style={stateBoxStyle}>
          {" "}
          <Typography style={stateStyle}>
            {props.comboPiece.playerState.join(" + ").toUpperCase()}
          </Typography>{" "}
        </div>
      );
    }
  }

  const stateRef = useRef();
  const titleRef = useRef();
  const innerBoxRef = useRef();

  return (
    <Stack
      direction="row"
      style={{
        position: "relative",
        flexGrow: grow ? 1 : "",
      }}
      onClick={props.clickcallback ? (e) => props.clickcallback(e) : null}
    >
      {renderTails()}
      <Box
        ref={innerBoxRef}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          // paddingLeft: "6px",
          cursor: "pointer",
          // borderRadius: index == 0 ? "4% 3px 3px 4%" : "0px 3px 3px 0px",
          borderRadius: "0px 3px 3px 0px",
          backgroundColor:
            index % 2 == 0 ? secondaryColor : primaryColorDisplay,
          height: `${triangleWidth}px`,
          flexGrow: grow ? 1 : "",
          // marginLeft: index == 0 ? `-${triangleWidth / 2}px` : "auto"
        }}
      >
        {renderPiece()}

      </Box>
      {renderName()}
      {renderPlayerState()}
      <div style={index != max ? triangleStyle : enderStyle} />
    </Stack>
  );
}
