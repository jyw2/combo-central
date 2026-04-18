import { Tooltip, Typography, styled, tooltipClasses } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import ComboPiece from "../shared/comboPiece";
import ComboActionDetailed from "./comboActionDetailed";

const TransparentTooltip = styled(({ className, comboPiece, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    disableFocusListener
    title={
      <div style={{ minWidth: "400px", maxWidth: "100vw", position: "relative" }}>
        <ComboActionDetailed comboPiece={comboPiece} />
      </div>
    }
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
    backgroundColor: "black",
    padding: 0,
  },
}));

export default function ComboPieceInline(props) {
  const characterContext = useContext(CharacterContext);
  const theme = useTheme();
  let { comboPiece } = props;

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <Stack
      style={{
        display: "inline-block",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <TransparentTooltip comboPiece={comboPiece}>
        <Stack
          direction="row"
          alignItems="center"
          style={{
            position: "relative",
            padding: "2px 2px",
          }}
          justifyContent="center"
        >
          <Typography
            sx={{
              color: characterContext.characterData.textColor,
              fontSize: "15px",
              fontWeight: "bold",
            }}
            style={{
              textWrap: "noWrap"
            }}
          >
            {comboPiece?.name ? toTitleCase(comboPiece.name) : " "}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              marginLeft: "5px",
              position: "relative",
              flexGrow: 1,
              borderRadius: "1px 1px 1px 1px",
              backgroundColor: characterContext.characterData.color,
              height: "24px",
            }}
          >
            <ComboPiece
              comboPiece={comboPiece}
              setSelection={() => { }}
              small
            ></ComboPiece>
          </Box>
          {comboPiece?.playerState?.length ? (
            <Typography
              sx={{ color: characterContext.characterData.textColor, marginLeft: "5px" }}
            >
              ( {comboPiece?.playerState?.join(", ")} )
            </Typography>
          ) : null}
        </Stack>
      </TransparentTooltip>
    </Stack>
  );
}
