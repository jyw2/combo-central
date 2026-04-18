import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import {
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import RichTextEditor from "components/editCombo/richTextEditor/richTextEditor";
import ChevronChainContentWrapper from "components/shared/chevronChainContentWrapper";
import DetailChip from "components/shared/detailChip";
import { ComboDetailsSchemaContext } from "context/comboDetailsSchemaContext.js";
import { UserContext } from "context/userContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CharacterContext } from "../../context/characterContext";
import { characterData } from "../../util/envResolverUtilEs6";
import { ComboDetailType } from "../../models/Combos";
import HttpClient from "../../services/httpClient";
import JsonSchemaUtils from "../../util/jsonSchemaUtils";
import ObjectUtils from "../../util/objectUtils";
import CharacterHeader from "../shared/characterHeader";
import ChevronChain from "../shared/chevronChain";
import GutterBackground from "../shared/gutterBackground";
import Combo from "./combo";
import ViewComboActionsBar from "./viewComboActionsBar";
import FooterAd from 'components/footerAd';

function getDate(combo) {
  if (!combo?.createdDate) return "date";

  var d = new Date(combo.createdDate);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = d.toLocaleDateString(undefined, options);

  return formattedDate;
}

function ViewComboPage() {
  let { charId, comboId } = useParams();

  const comboDetailsSchemaContext = useContext(ComboDetailsSchemaContext)
  const theme = useTheme();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))


  const [combo, setCombo] = useState(null);
  const [owner, setOwner] = useState(null)

  useEffect(() => {
    document.title = `View Combo`;
  }, []);

  useEffect(() => {
    async function fetchAndInit() {
      const { data, status } = await HttpClient.getCombo(comboId);
      if (status === 404 || status === 500) {
        navigate("/404", { replace: true })
      } else if (status === 200) {
        setCombo(data);

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


  function renderSubDetail(detailName, subDetailName, value) {
    switch (getUIType(detailName, subDetailName)) {
      case ComboDetailType.String_Multi_Select:
        return (
          <Stack direction="row" flexWrap="wrap" justifyContent="end">
            {value.map((detail, index) => <DetailChip key={index} backgroundColor={characterContext.characterData.secondaryColor} >{detail}</DetailChip>)}
          </Stack >
        );
      case ComboDetailType.Char_Array:
        return (
          <Stack direction="row" flexWrap="wrap" justifyContent="end">
            {value.map((detail, index) => <DetailChip key={index} backgroundColor={characterContext.characterData.secondaryColor} charIcon>{detail}</DetailChip>)
            }
          </Stack >
        );
      default:
        return <DetailChip key="0" backgroundColor={characterContext.characterData.secondaryColor} >{value}</DetailChip>;
    }
  }

  function getUIType(detailName, detailSubTypeName) {
    return comboDetailsSchemaContext.comboDetailsSchema[detailName]
    [detailSubTypeName].uiType;
  }

  function getDemoButtonContent() {
    return (
      <ChevronChainContentWrapper clickcallback={handleClickDemo}>
        <Stack
          style={{ margin: "auto" }}
          spacing={1} alignItems="center" direction="row" justifyContent="center">
          <OndemandVideoIcon />
          <Typography style={{ fontWeight: "bold" }}>
            DEMO VIDEO
          </Typography>
        </Stack>
      </ChevronChainContentWrapper>
    )
  }
  const [openRedirectAlert, setOpenRedirectAlert] = React.useState(false);

  const handleClickDemo = () => {
    setOpenRedirectAlert(true);
  };

  const handleCancelDemoClick = () => {
    setOpenRedirectAlert(false);
  };
  const hasRegDetails = !!combo?.oki?.tags?.length || combo?.oki?.notes?.text || !!combo?.comment?.text || !!combo?.demoLink
  function renderMainColumn() {
    return (
      <div>
        <div>
          <Dialog
            open={openRedirectAlert}
            onClose={handleCancelDemoClick}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Open link to external website?"}
            </DialogTitle>
            <DialogContent>

              <Stack>
                <Typography>
                  You are leaving combo central and opening:
                </Typography>
                <Typography style={{ color: characterContext.characterData.textColor }}>{combo?.demoLink}</Typography>
              </Stack>
              <Typography style={{ fontWeight: "bold", marginTop: "10px" }}>Only continue if you trust this
                link. </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancelDemoClick}>Cancel</Button>
              <Button onClick={() => { window.open(combo?.demoLink); setOpenRedirectAlert(false) }} autoFocus>
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <Stack spacing={2} style={{ marginBottom: 2 }}>
          <Combo
            comboPieces={combo?.comboPieces}
            name={combo?.name}
          />

          {!hasRegDetails ? null : <Collapse in={hasRegDetails}>
            <Card sx={{ p: 3, mb: 2 }}>

              <Stack direction="column" spacing={2} divider={<Divider />}>
                {combo?.demoLink ?
                  // combo?.demoLink.indexOf("https://www.youtube.com/") === 0 || true ?
                  //   <iframe
                  //     title="combo-video"
                  //     frameBorder="0"
                  //     style={{ width: "100%", height: largeScreenSize? "400px" : "50vw", marginBottom: "20px" }}
                  //     src="https://www.youtube.com/embed/-iJWZJ53jUM?si=iJSPda2f2V2SSrjE"
                  //     frameborder="0" 
                  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  //     referrerpolicy="strict-origin-when-cross-origin" 
                  //     allowfullscreen
                  //   /> 

                  //   :
                  <ChevronChain
                    content={[getDemoButtonContent()]}
                    height={45}
                    grow
                    secondaryColor={characterContext.characterData?.color} /> : null
                }

                {!combo?.comment?.text ? null : (
                  <Stack alignItems="start">
                    <Typography style={{ fontWeight: "bold" }}>
                      DESCRIPTION
                    </Typography>
                    <RichTextEditor
                      readonly
                      value={combo.comment.text}
                    ></RichTextEditor>
                  </Stack>
                )}
                {combo?.oki?.tags?.length || combo?.oki?.notes?.text ?
                  <Stack>
                    <Stack
                      direction="row"
                      style={{ marginBottom: "8px", width: "100%" }}
                      justifyContent="space-between"
                    >
                      <Stack alignItems="start">
                        <Typography style={{ fontWeight: "bold" }}>
                          OKIZEME
                        </Typography>
                        <FormHelperText
                          align="left"
                          variant="caption"
                          style={{ margin: 0, marginBottom: "5px" }}
                        >
                          What to do after the combo
                        </FormHelperText>
                      </Stack>
                      {combo?.oki?.tags ? (
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          justifyContent="end"
                          sx={{ ml: 4 }}
                        >
                          {combo.oki?.tags?.map((detail, index) =>
                            renderSidePanelChip(detail, index)
                          )}
                        </Stack>
                      ) : null}
                    </Stack>
                    {combo?.oki?.notes?.text ? (
                      <RichTextEditor
                        readonly
                        value={combo?.oki?.notes?.text}
                      />
                    ) : null}
                  </Stack>
                  : null}
              </Stack>
            </Card>
          </Collapse>
          }
          <FooterAd />
        </Stack>
      </div>
    )
  }

  function renderSideColumn() {
    return (
      <div style={{ width: largeScreenSize ? "250px" : "100%" }}>
        {largeScreenSize ? <Stack sx={{ mb: 2 }}>
          <ViewComboActionsBar
            combo={combo}
            primaryColor={characterContext.characterData.darkerColor}
            secondaryColor={characterContext.characterData.color}
            charId={charId}
            setCombo={setCombo}
            grow={!largeScreenSize}
          ></ViewComboActionsBar>
        </Stack> : null}
        <Collapse in={true} >
          <Card sx={{ p: 2 }}>
            {!(combo && owner) ? <LinearProgress color="secondary" /> :
              <Stack direction="column" spacing={2} divider={<Divider />}>
                <Stack direction="row" alignContent="center">
                  <Typography
                    align="left"
                    style={{
                      color: theme.palette.text.dark,
                      opacity: "80%",
                      fontSize: "12px",
                    }}
                  >
                    {getDate(combo)} by
                  </Typography>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`../../../user/${combo?.ownerId}`} >
                    <p style={{ margin: 0, marginLeft: "6px", fontSize: "13px", textDecoration: "none", fontWeight: "bold", color: theme.palette.text.primary, textOverflow: "ellipsis", overflow: "hidden", maxWidth: "120px" }} >
                      {owner?.username}</p>
                  </Link>
                </Stack>
                {combo?.details ? (
                  Object.entries(combo?.details).map(
                    ([detailCategory, subDetails], index) => {
                      return (
                        <Stack key={index}>
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "10px",
                            }}
                          >
                            {JsonSchemaUtils.formatDetail(
                              detailCategory
                            ).toUpperCase()}
                          </Typography>
                          {!subDetails
                            ? null
                            : Object.entries(subDetails).map(
                              ([subDetail, value], index) => {
                                return (
                                  <Stack
                                    key={index}
                                    direction="row"
                                    style={{ marginBottom: "8px" }}
                                    justifyContent="space-between"
                                  >
                                    <Typography
                                      align="left"
                                      sx={{
                                        fontSize: "14px",
                                        color:
                                          theme.palette.text.secondary,
                                      }}
                                      style={{
                                        flexShrink: "0",
                                      }}
                                    >
                                      {JsonSchemaUtils.formatDetail(
                                        subDetail
                                      )}
                                    </Typography>
                                    {renderSubDetail(
                                      detailCategory,
                                      subDetail,
                                      value
                                    )}
                                  </Stack>
                                );
                              }
                            )}
                        </Stack>
                      );
                    }
                  )
                ) : null}
              </Stack>}
          </Card>

        </Collapse>
        <Stack sx={{ py: 2 }}>
          <FooterAd />
        </Stack>
      </div>
    )
  }

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])

  // can be optimized be extracting component and memoizing
  const cleanedDetails = combo?.details
    ? ObjectUtils.removeEmptyProperties(combo?.details)
    : {};
  return (
    <GutterBackground
      leftText={characterContext.characterData.name}
      rightText="viewing combo"
      color={characterContext.characterData.color}
    >
      <Stack
        style={{ maxWidth: "1100px" }}
        sx={{ flexGrow: 1, m: "auto", pb: 10 }}
        spacing={1}
      >
        <CharacterHeader entity="COMBO" redirectOverride="/combo/search" />

        {largeScreenSize ?
          <Grid container spacing={2} style={{ marginTop: "-16px", p: 0 }}>
            <Grid item xs={9} style={{ paddingLeft: "0" }}>
              {renderMainColumn()}
            </Grid>
            <Grid item xs={3} >
              {renderSideColumn()}
            </Grid>
          </Grid> :
          <Stack>
            <Stack sx={{ mb: 2, mt: 1 }}>
              <ViewComboActionsBar
                combo={combo}
                primaryColor={characterContext.characterData.darkColor}
                secondaryColor={characterContext.characterData.color}
                charId={charId}
                setCombo={setCombo}
                grow={!largeScreenSize}
              ></ViewComboActionsBar></Stack>
            <Stack  sx={{mb:2}}>
              {renderMainColumn()}
            </Stack>
            <Stack >
              {renderSideColumn()}
            </Stack>
          </Stack>}
      </Stack>
    </GutterBackground>
  );
}

export default ViewComboPage;
