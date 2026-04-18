import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../context/characterContext.js";
import { characterData } from "../../util/envResolverUtilEs6.js";
import CharacterHeader from "../shared/characterHeader.js";
import ComboSetSearchCard from "../shared/comboSetSearch/comboSetSearchCard.js";
import GutterBackground from "../shared/gutterBackground.js";
import FooterAd from "components/footerAd.js";

export default function ComboSetSearchPage() {
  let { charId } = useParams();
  const theme = useTheme()
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))
  
  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])

  useEffect(() => {
    document.title = `${characterContext.characterData.name} Combo Sets`;
  }, [characterContext.characterData.name]);

  return (
    <GutterBackground
      leftText={characterContext.characterData.name}
      rightText="Searching Combo Sets"
      color={characterContext.characterData.color}
    >
      <Stack
        style={{ maxWidth:"900px" }}
        sx={{ flexGrow: 1, m: "auto", pb: 10 }}
      >
        <Stack sx={{ width:"100%" }}>
          <CharacterHeader entity="COMBO SETS"></CharacterHeader>
        </Stack>
        <ComboSetSearchCard></ComboSetSearchCard>
        <Stack sx={{py:2, width:"100%"}}>
          <FooterAd />
        </Stack>
      </Stack>
    </GutterBackground>
  );
}
