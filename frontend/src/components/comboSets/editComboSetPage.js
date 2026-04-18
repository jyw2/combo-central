import { useParams } from "react-router-dom";
import {
  Stack,
  Chip,
} from "@mui/material";
import CharacterHeader from "components/shared/characterHeader";
import GutterBackground from "components/shared/gutterBackground";
import { CharacterContext } from "context/characterContext";
import { useState, useEffect, useContext } from "react";
import { characterData } from "util/envResolverUtilEs6";
import { useTheme } from "@mui/material/styles";
import EditComboSetCard from "./editComboSetCard";
import FooterAd from "components/footerAd";

export default function EditComboSetPage() {
  let { charId, comboSetId } = useParams();
  const theme = useTheme();

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])

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
  return (
    <GutterBackground
      leftText={characterContext.characterData.name}
      rightText="viewing combo set"
      color={characterContext.characterData.color}
    >
      <Stack
        style={{ maxWidth: "900px" }}
        sx={{ flexGrow: 1, m: "auto", pb: 10, }}
      >
        <CharacterHeader entity="EDIT COMBO SET"></CharacterHeader>
        <Stack sx={{ mt: { xs: 2, md: -2 } }} spacing={3}>
          <EditComboSetCard affectTitle charId={charId} update comboSetId={comboSetId} />
          <FooterAd />
        </Stack>
      </Stack>
    </GutterBackground>
  );
}
