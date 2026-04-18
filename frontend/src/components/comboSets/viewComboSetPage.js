import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Grid,
  Collapse,
  Card,
  Chip,
  Typography,
  Fade,
  LinearProgress,
  Divider
} from "@mui/material";
import CharacterHeader from "components/shared/characterHeader";
import GutterBackground from "components/shared/gutterBackground";
import { CharacterContext } from "context/characterContext";
import { useState, useEffect, useContext } from "react";
import HttpClient from "services/httpClient";
import { characterData } from "util/envResolverUtilEs6";
import ComboPreviewCard from "components/shared/comboPreviewCard";
import { useTheme } from "@mui/material/styles";
import ViewComboSetActionsBar from "./viewComboSetActionsBar";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import ComboRenderSelectorRow from "components/shared/comboRenderSelectorRow";
import FooterAd from "components/footerAd";

function getDate(comboSet) {
  if (!comboSet?.createdDate) return " d m, yyyy";

  var d = new Date(comboSet.createdDate);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = d.toLocaleDateString(undefined, options);

  return formattedDate;
}

export default function ViewComboSetPage() {
  let { charId, comboSetId } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  const [comboSet, setComboSet] = useState(null);
  const [owner, setOwner] = useState(null)

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])

  useEffect(() => {
    async function fetchAndInit() {
      let { data, status } = await HttpClient.getComboSet(comboSetId);
      if (status === 404 || status === 500) {
        navigate("/404", { replace: true })
      } else if (status === 200) {
        setComboSet(data);

        let userRes = await HttpClient.getUser(data.ownerId);
        if (userRes.status === 404 || userRes.status === 500) {
          navigate("/404", { replace: true })
        } else if (userRes.status === 200) {
          setOwner(userRes.data);
        }
      }
    }
    fetchAndInit();
  }, []);

  useEffect(() => {
    document.title = `${comboSet?.name ? comboSet?.name : ""} Combo Set`;
  }, [comboSet]);

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

  function renderMainCol() {
    return (<Stack spacing={2}>
      <Collapse in={true}>
        <Card sx={{ p: 3, overflow: "visible", position: "relative" }} >
          <div style={{ height: "1px" }}>
            <Stack
              direction="row"
              style={{
                position: "absolute",
                top: "-15px",
                left: "15px",
                width: "100%"
              }}
            >
              <Fade in={!!comboSet?.name}>
                <Typography
                  align="left"
                  style={{ fontWeight: "bold", fontSize: "25px", overflow: "hidden", textOverflow: "ellipsis", width: "95%" }}
                >
                  {comboSet?.name?.toUpperCase() ?? ""}
                </Typography>
              </Fade>
            </Stack>
          </div>
          <Stack alignItems="start">
            <ComboRenderSelectorRow collapsible={!largeScreenSize} />
          </Stack>
          {comboSet ? (
            comboSet.combos?.map((combo) => (
              <Stack sx={{ mt: 2 }} key={combo._id} >
                <ComboPreviewCard combo={combo} charId={charId} />
              </Stack>
            ))
          ) : (
            <LinearProgress color="secondary" />
          )}
        </Card>
      </Collapse>
      <FooterAd />
    </Stack>)
  }

  function renderDetailsCol() {
    return (
      <Stack spacing={2}>
        <Collapse in={true} >
          <Card sx={{ p: 2 }}>
            {!(comboSet && owner) ? <LinearProgress color="secondary" /> :
              <div>
                <Stack direction="row" alignContent="center">
                  <Typography
                    align="left"
                    style={{
                      color: theme.palette.text.dark,
                      opacity: "80%",
                      fontSize: "12px",
                    }}
                  >
                    {getDate(comboSet)} by
                  </Typography>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`../../../user/${comboSet?.ownerId}`} >
                    <p style={{ margin: 0, marginLeft: "6px", fontSize: "13px", textDecoration: "none", fontWeight: "bold", color: theme.palette.text.primary, textOverflow: "ellipsis", overflow: "hidden", maxWidth: "120px" }} >
                      {owner?.username}</p>
                  </Link>
                </Stack>
                <Divider sx={{ my: 2 }} />
                {comboSet?.tags?.length ? (
                  <Stack>
                    <Typography
                      align="left"
                      style={{
                        color: theme.palette.text.dark,
                        fontSize: "12px",
                      }}
                    >
                      Tags
                    </Typography>
                    <Stack direction="row" style={{ flexWrap: "wrap" }}>
                      {comboSet.tags.map((tag, index) =>
                        renderSidePanelChip(tag, index)
                      )}
                    </Stack>
                  </Stack>
                ) : null}
              </div>}
          </Card>
        </Collapse>
        <FooterAd />

      </Stack>
    )
  }

  return (
    <GutterBackground
      leftText={characterContext.characterData.name}
      rightText="viewing combo set"
      color={characterContext.characterData.color}
    >
      <Stack
        style={{ maxWidth: "1100px" }}
        sx={{ flexGrow: 1, m: "auto", pb: 10 }}
        spacing={1}
      >
        <CharacterHeader entity="COMBO SET" redirectOverride="/combo-set/search" />
        {largeScreenSize ?
          <Grid container spacing={2} style={{ marginTop: "-16px", p: 0 }}>
            <Grid item xs={9} style={{ paddingLeft: "0" }}>
              {renderMainCol()}
            </Grid>
            <Grid item xs={3}>
              <Stack sx={{ mb: 2 }}>
                <ViewComboSetActionsBar comboSet={comboSet} setComboSet={setComboSet} secondaryColor={characterContext.characterData.color}
                  charId={charId} />
              </Stack>
              <Stack style={{ width: "250px" }}>
                {renderDetailsCol()}

              </Stack>
            </Grid>
          </Grid> :
          <Stack spacing={2} sx={{ pt: 3 }}>
            <Stack>
              <ViewComboSetActionsBar comboSet={comboSet} setComboSet={setComboSet} secondaryColor={characterContext.characterData.color}
                charId={charId} />
            </Stack>
            {renderMainCol()}
            {renderDetailsCol()}
          </Stack >
        }
      </Stack>
    </GutterBackground >
  );
}
