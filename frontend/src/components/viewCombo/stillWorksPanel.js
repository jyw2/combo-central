import React, { useContext } from "react";
import {Typography, Stack} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { characterData } from "../../util/envResolverUtilCJS";
import { gameData } from "../../util/envResolverUtilCJS";
import { CharacterContext } from "context/characterContext";

export default function StillWorksPanel(props) {
  const { charId, combo } = props;
  const theme = useTheme();
  const  characterContext = useContext(CharacterContext);

  function noVotes() {
    return (
      combo?.still_works?.viewers?.yes === 0 &&
      combo?.still_works?.viewers?.no === 0
    );
  }

  return (
    <div>
      <Typography
        align="left"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        STILL WORKS?
      </Typography>
      <Typography
        align="left"
        sx={{
          fontSize: "11px",
          color: theme.palette.text.secondary,
          fontWeight: "bold",
        }}
        style={{
          flexShrink: "0",
        }}
      >
        {`PLAYERS SAY (${
          combo?.still_works?.viewers?.yes + combo?.still_works?.viewers?.no
        }
   votes)`}
      </Typography>
      <Stack direction="row">
        <div
          style={{
            width: noVotes()
              ? "50%"
              : `${100 * combo?.still_works?.viewers?.yes}%`,
            boxSizing: "border-box",
            height: "24px",
            borderRadius: "3px 0px 0px 3px",
            backgroundColor: characterContext.characterData.secondaryColor,
            overflow: "hidden",
            color: theme.palette.text.dark,
          }}
        >
          <Typography
            style={{
              fontSize: "12px",
              margin: "auto",
              padding: "3px",
            }}
          >
            YES ({`${100 * combo?.still_works?.viewers?.yes}%`})
          </Typography>
        </div>
        <div
          style={{
            width: noVotes()
              ? "50%"
              : `${100 * combo?.still_works?.viewers?.no}%`,
            boxSizing: "border-box",
            height: "24px",
            borderRadius: "0px 3px 3px 0px",
            backgroundColor: theme.palette.anchor.dark,

            overflow: "hidden",
          }}
        >
          {" "}
          <Typography
            style={{
              fontSize: "12px",
              margin: "auto",
              color: theme.palette.text.dark,
              padding: "4px",
            }}
          >
            NO ({`${100 * combo?.still_works?.viewers?.no}%`})
          </Typography>
        </div>
      </Stack>
      <Typography
        align="left"
        sx={{
          fontSize: "11px",
          color: theme.palette.text.secondary,
          fontWeight: "bold",
          marginTop: "8px",
        }}
        style={{
          flexShrink: "0",
        }}
      >
        CREATOR SAYS
      </Typography>
      <div
        style={{
          width: `100%`,
          boxSizing: "border-box",
          height: "24px",
          backgroundColor:
            combo.still_works.creator === "yes"
              ? characterContext.characterData.secondaryColor
              : theme.palette.anchor.dark,
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <Typography
          style={{
            fontSize: "12px",
            margin: "auto",
            padding: "4px",
            color: theme.palette.text.dark,
          }}
        >
          {combo.still_works.creator.toUpperCase()}
        </Typography>
      </div>
      <i
        style={{
          margin: 0,
          marginBottom: "5px",
          fontSize: "10px",
          textAlign: "left",
          color: theme.palette.text.dark,
        }}
      >
        Game version {gameData.version}
      </i>{" "}
    </div>
  );
}
