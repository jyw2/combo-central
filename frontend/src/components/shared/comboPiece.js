import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { collapsePairs } from "util/envResolverUtilEs6";
import { useContext } from "react";
import { ComboPieceUtil } from "util/comboPieceUtil";
import { ComboRenderContext } from "../../context/comboRenderContext";

function switchMotionDirection(command) {
  const positionMap = {
    1: "3",
    2: "2",
    3: "1",
    4: "6",
    5: "5",
    6: "4",
    7: "9",
    8: "8",
    9: "7",
  };

  return command
    .split("")
    .map((c) => positionMap[c] ?? c)
    .join("");
}

function ComboPiece(props) {
  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);
  const buttonRender = comboRenderContext.buttonRender;
  const { disabled, comboPiece, setSelection, small, noCollapse, medium, } = props;

  function RenderCommand(input) {
    if (input.command && input.command != "") {
      return (
        <Stack direction="row" style={{ flexWrap: "noWrap" }} alignItems="center">
          <Stack
            direction="row"
            divider={orDivider}
            alignItems="center"
            style={{ flexWrap: "noWrap" }}
          >
            {input.command.map((c, index) =>
              <div key={index}>{
                comboRenderContext.getMotionComponent(
                  comboRenderContext.motionRenderName,
                  theme,
                  {
                    command: comboRenderContext.motionDirection === "Facing Right"
                      ? c
                      : switchMotionDirection(c),
                  },
                  small,
                  medium,
                )}
              </div>
            )}
          </Stack>

          {RenderPlus(input)}
        </Stack>
      );
    }
  }

  function RenderPlus(input) {
    if (
      (comboRenderContext.motionRenderName == "Numpad Notation" &&
        comboRenderContext.buttonRender.name == "Numpad Notation") || (
        input.buttons.length === 0
      ) || input.buttons[0].length === 0
    ) {
      return <div />;
    } else {
      return (
        <AddIcon
          style={{ marginTop: "auto", marginBottom: "auto" }}
          sx={{ width: "14px", p: "6px" }}
        ></AddIcon>
      );
    }
  }

  function RenderButtons(b, hasSharedAnnotation) {
    if (b.length !== 0) {
      return b.map((button, index) => {
        let cleanButton
        let annotation

        const annotationIndex = button.indexOf(":")
        if (annotationIndex !== -1) {
          cleanButton = button.slice(0, annotationIndex)
          annotation = button.slice(annotationIndex + 1)
        } else {
          cleanButton = button
          annotation = null
        }

        return <Stack direction="row" alignItems="center" spacing={0.5} key={index} style={{ marginTop: "auto", marginBottom: "auto" }}>
          {buttonRender.render.render(cleanButton, small)}
          {annotation && !hasSharedAnnotation ? <Typography style={{ textWrap: "noWrap", fontSize: "13px" }}>{annotation}</Typography> : null}
        </Stack>
      });
    }
  }
  const setSelfAsSelection = () => {
    if (!setSelection) return
    props.setSelection(props.index);
  };
  const orDivider = (
    <Typography variant="subtitle2" sx={{ p: 1, m: "auto", fontSize: "20px" }}>
      /
    </Typography>
  );
  const bigOrDivider = (
    <Typography variant="subtitle2" sx={{ p: 1, m: "auto", fontSize: "15px" }}>
      OR
    </Typography>
  );


  function renderButtonVariants(i) {
    let buttons = null
    if (comboRenderContext.collapseButtonRender && !noCollapse) {
      buttons = ComboPieceUtil.collapseButtons(i.buttons, collapsePairs)
    } else {
      buttons = i.buttons
    }


    return buttons.map((buttonSet, index) => {
      let sharedAnnotation = true
      let currentAnnotation = null
      buttonSet.forEach((b) => {
        let annotation = null
        let currentButton = b
        if (currentButton.indexOf(":") > -1) {
          // button has annotations
          annotation = currentButton.slice(currentButton.indexOf(":") + 1)
          currentButton = currentButton.slice(0, currentButton.indexOf(":"))
        } else {
          annotation = "" //no annotation
        }

        if (currentAnnotation === null) {
          currentAnnotation = annotation
        } else if (currentAnnotation !== annotation) {
          // not all buttons have the same annotation.
          sharedAnnotation = false
        }
      })

      let hasSharedAnnotation = sharedAnnotation && currentAnnotation !== "" && currentAnnotation !== null
      return (
        <Stack
          key={index}
          spacing={"10px"}
          style={{ flexWrap: "noWrap" }}
          alignItems="center"
          direction="row">
          <Stack
            spacing={"1px"}
            style={{ flexWrap: "noWrap" }}
            direction="row"
            alignItems="center"
            divider={
              <AddIcon
                sx={{ width: "10px" }}
                style={{
                  flexWrap: "wrap",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            }
          >
            {RenderButtons(buttonSet, hasSharedAnnotation)}
          </Stack>
          {hasSharedAnnotation ? <Typography style={{ textWrap: "noWrap", fontSize: "13px" }}>{currentAnnotation}</Typography> : null}
        </Stack>)
    })
  }

  function hasNoInput(is) {
    return (
      is.length === 1 &&
      is[0].command.length === 1 &&
      is[0].command[0] === "" &&
      is[0].buttons.length === 1 &&
      is[0].buttons[0].length === 0
    )
  }

  return (
    <Stack direction="row"
      divider={<ArrowRightIcon size="10px" sx={{ mx: 0 }} />}
      style={{ opacity: disabled ? 0.5 : 1, flexWrap: "noWrap" }}
      alignItems="center"
      justifyContent="center"
    >
      {props.comboPiece.input.map((is, index) =>
        hasNoInput(is) ?
          <Typography key={index} style={{fontSize:"14px", fontWeight:"bold"}}>NO INPUT</Typography>
          :
          <Stack
            key={index}
            direction="row"
            divider={bigOrDivider}
            style={{ flexWrap: "noWrap" }}
          >
            {is.map((i, index) => (
              <Stack
                justifyContent="center"
                key={index}
                alignItems="center"
                direction="row"
                sx={{ px: small ? "6px" : "10px", py: "5px", m: "auto" }}
                style={{
                  flexWrap: "wrap",
                  marginTop: "auto",
                  marginBottom: "auto",
                  flexWrap: "noWrap",
                }}
                onClick={setSelfAsSelection}
              >
                {RenderCommand(i)}
                <Stack
                  direction="row"
                  style={{ flexWrap: "noWrap" }}
                  alignItems="center"
                  divider={orDivider}
                >
                  {renderButtonVariants(i)}
                </Stack>
              </Stack>
            ))}
          </Stack>
      )}
    </Stack>
  );
}

export default ComboPiece;
