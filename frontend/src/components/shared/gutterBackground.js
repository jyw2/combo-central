import useMediaQuery from '@mui/material/useMediaQuery';

import { Slide, Typography, useTheme } from "@mui/material";
export default function GutterBackground(props) {
  // <Stack direction="row" sx={{ m: "auto" }} style={{ marginLeft: "auto", marginRight: "auto", width: "fit-content" }} >
  const theme = useTheme();
  const leftPos = 140;
  const rightPos = 140;
  const lgScreen = useMediaQuery(theme.breakpoints.up('md'))

  const { invert } = props;

  const mainColor = invert ? theme.palette.background.dark : props.color;
  const secondaryColor = invert ? props.color : theme.palette.background.dark;

  const lineOpacity = props.fullOpacity? 1 : invert ? "1" : "0.3";
  const textOpacity = invert ? "0.3" : "1";

  function GutterText(flip, text) {
    text = text.toUpperCase();

    const pos = flip
      ? { top: 0, right: `${rightPos}px` }
      : { top: 0, left: `${leftPos}px` };
    return (
      <div
        style={{
          marginTop: 0,
          // border: "solid",
          width: "0px",
          position: "absolute",
          ...pos,
          height: "0px",
        }}
      >
        <Typography
          style={{
            transformOrigin: "center left",
            marginLeft: lgScreen ? "20px" : "0px", // constrols horizontal translation
            transform: `rotate(90deg)`,
            color: secondaryColor,
            fontSize: lgScreen ? "270px" : "170px",
            fontWeight: "bold",
            letterSpacing: lgScreen ? "-40px" : "-20px",
            whiteSpace: "nowrap",
            textAlign: "left",
            margin: 0,
            padding: 0,
            marginTop: lgScreen ? "-180px" : "-100px", // controls vertical translation
            opacity: textOpacity,
          }}
        >
          {" "}
          {text}{" "}
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{ width: "100%", position: "relative", zIndex: 0, flexGrow: 1 }}
    >
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {lgScreen ? <><div
          style={{
            backgroundColor: mainColor,
            opacity: lineOpacity,
            width: "210px",
            position: "absolute",
            height: "100%",
            left: "0px",
          }}
        ></div>
          <div
            style={{
              backgroundColor: mainColor,
              opacity: lineOpacity,
              width: "120px",
              position: "absolute",
              height: "100%",
              right: `${rightPos + 190}px`,
            }}
          ></div>
          <div
            style={{
              backgroundColor: mainColor,
              opacity: lineOpacity,
              width: "100px",
              position: "absolute",
              height: "100%",
              right: 0,
            }}
          ></div>
          <div
            style={{
              backgroundColor: mainColor,
              opacity: lineOpacity,
              width: "15px",
              position: "absolute",
              height: "100%",
              top: 0,
              right: `${rightPos + 130}px`,
            }}
          ></div>  </> : null}
        {lgScreen ? <>
          <Slide in={true} timeout={500} key={props.leftText + "-LEFT"}>
            {GutterText(false, props.leftText)}
          </Slide>
          <Slide in={true} timeout={500} key={props.rightText + "-RIGHT"}>
            {GutterText(true, props.rightText)}
          </Slide></> : null}
      </div>
      <div style={{ zIndex: 1, width: "100%", position: "relative" }}>
        {props.children}
      </div>
    </div>
  );
}
