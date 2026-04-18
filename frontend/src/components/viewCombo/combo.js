import { useTheme } from "@emotion/react";
import {
  Box,
  Fade,
  LinearProgress
} from "@mui/material";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import ComboActionDetailed from "components/shared/comboActionDetailed";
import React, { useContext, useState } from "react";
import { CharacterContext } from "../../context/characterContext";
import ChevronComboSequence from "../shared/chevronComboSequence";
import ComboRenderSelectorRow from "../shared/comboRenderSelectorRow";

function Combo(props) {
  const [selection, setSelection] = useState(null);
  const [symbolStyle, setSymbolStyle] = React.useState("game");
  const [direction, setDirection] = React.useState("right");
  const theme = useTheme();
  const characterContext = useContext(CharacterContext);
  const { name } = props
  const medScreenSize = useMediaQuery(theme.breakpoints.up('sm'))

  function renderSelection() {
    if (selection != null) {
      return (
        <Fade in={true} timeout={500} key={selection} direction="right">
          <div style={{ marginTop: "35px" }}>
            <ComboActionDetailed comboPiece={props.comboPieces[selection]} />
          </div>
        </Fade>
      );
    }
  }

  return (
    <Card sx={{ p: 4, position: "relative", overflow: "visible", }}>
      <div style={{ height: "1px", width: "100%" }}>
        <Stack
          direction="row"
          style={{
            position: "absolute",
            width: "80%",
            top: "-15px",
            left: "15px",
          }}
        >
          <Fade in={!!name}>
            <Typography
              align="left"

              style={{ fontWeight: "bold", fontSize: "25px", overflow: "hidden", textOverflow: "ellipsis", width: "95%", }}
            >
              {name?.toUpperCase() ?? ""}
            </Typography>
          </Fade>
        </Stack>
      </div>

      <Stack direction="row" justifyContent="space-between">
        <ComboRenderSelectorRow collapsible={!medScreenSize} />
      </Stack>
      <Typography style={{
        fontSize: "13px", textAlign: "left",
        marginBottom: "5px", marginLeft: "16px",
        color: theme.palette.text.veryDark
      }}>Click on a combo action for more info</Typography>
      <Box sx={{ width: "100%" }}>
        {props?.comboPieces ? (

          <ChevronComboSequence
            comboPieces={props.comboPieces}
            setSelection={setSelection}
            selection={selection}
          />

        ) : (
          <LinearProgress color="secondary" />
        )}
      </Box>

      {renderSelection()}
    </Card >
  );
}

export default Combo;
