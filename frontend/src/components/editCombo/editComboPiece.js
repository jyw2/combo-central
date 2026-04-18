import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress, Divider, Fade, LinearProgress, Grow } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from "prop-types";
import { useContext, useEffect, useState, useCallback } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";
import { EditComboPageContext } from "../../context/editComboPageContext";
import { suggestedPiecePlayerStates, supportedButtons } from "../../util/envResolverUtilEs6.js";
import ComboPieceChevron from "../shared/comboPieceChevron";
import ButtonRenderSelectorRow from "../shared/comboRenderSelectorRow";
import EditPad from "./editPad";
import RichTextEditor from "./richTextEditor/richTextEditor";
import { debounce } from "lodash"


import ComboOverflowWrapper from "components/shared/comboOverflowWrapper";
import { CharacterContext } from "context/characterContext";
import { ComboPieceUtil } from "util/comboPieceUtil";

const allowedMotionCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "[", "]"]

// const TransparentTooltip = styled(({ className, comboPiece, ...props }) => (
//   <Tooltip
//     {...props}
//     classes={{ popper: className }}
//     disableFocusListener
//     title={
//       <OverflowCard title="REQUIRES">
//         <div style={{ marginLeft: "30px", pointer: "default" }}>
//           <ComboPieceChevron
//             noFlexGrow
//             max={1}
//             setSelection={() => { }}
//             index={1}
//             comboPiece={comboPiece}
//           />
//         </div>
//       </OverflowCard>
//     }
//   />
// ))(() => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: "black",
//     maxWidth: "none",
//     padding: 0,
//   },
// }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function EditComboPiece(props) {
  const editComboPageContext = useContext(EditComboPageContext);
  const {
    name,
    setName,
    tips,
    tipsRef,
    inputs,
    setInputs,
    selectPresetPiece,
    precedingPresetIds,
    ignoreDependencies,
    noTips,
    setPlayerStates,
    playerStates,
    handleClose,
    handleDelete,
    saveComboPiece,
    setPresetId,
    presetId,
    resetAction,
    saveText,
    titlePrefix,
    shrink
  } = props;
  const theme = useTheme();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('sm'))
  const comboRenderContext = useContext(ComboRenderContext)


  // Gives only the first part in the sequence and first variant to the custom combo piece editor. 
  let command = structuredClone(inputs[0][0].command[0]);
  let buttons = structuredClone(inputs[0][0].buttons[0]);

  function setCommand(command) {
    inputs[0][0].command = [command];
    setInputs([[inputs[0][0]]]);
  }
  function setButtons(buttons) {
    inputs[0][0].buttons = [buttons];
    setInputs([[inputs[0][0]]]);
  }

  const buttonRender = useContext(ComboRenderContext).buttonRender;

  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [selectedPresetType, setSelectedPresetType] = React.useState("");
  const [fadeSelected, setFadeSelected] = useState(true);

  function selectAndFade(piece) {
    setFadeSelected(false);

    setTimeout(() => {
      setFadeSelected(true);
      selectPresetPiece(piece);
    }, 200);
  }

  useEffect(() => {
    setTab();
  }, []);
  function setTab() {
    setLoading(false);
  }

  function getCurrentComboPiece() {
    return {
      name: name,
      tips: tips,
      input: inputs,
      playerState: playerStates
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function renderLoadingSpinner() {
    if (loading) {
      return (
        <div style={{ margin: "auto" }}>
          <CircularProgress />
        </div>
      );
    }
  }


  function checkDependencies(group) {
    return group.map((g) => {
      if (!g.dependencies || ignoreDependencies) {
        // no dependencies
        g.disabled = false;
        return g;
      } else {
        let index = 0;
        let maxIndex = precedingPresetIds.length;
        for (let dep of g.dependencies) {
          index += 1;
          let precedingPreset =
            precedingPresetIds[precedingPresetIds.length - index];
          if (index > maxIndex) {
            g.disabled = true;
            return g;
          }
          if (dep.split("").some((c) => c === "|")) {
            // uses an OR operator (multiple options for this dependency)
            let options = dep.split("|");
            if (!options.some((o) => o === precedingPreset)) {
              g.disabled = true;
              return g; // none of the options found
            }
          } else {
            if (precedingPreset !== dep) {
              g.disabled = true;
              return g;
            }
          }
        }
        g.disabled = false;
        return g;
      }
    });
  }
  function renderPresetGroup(group) {
    let availablePresets = checkDependencies(group);
    if (availablePresets.length > 0) {
      return (
        <Card
          style={{
            padding: "4px 16px",
            marginTop: "8px",
            marginRight: "8px",
            borderRadius: "2px",
            width: "100%",
            boxSizing: "border-box",
            border: `1px solid ${theme.palette.secondary.darker}`
          }}
        >
          <ComboOverflowWrapper>
            <Stack direction={"row"} style={{ flexWrap: "wrap" }}
              key={comboRenderContext.motionRenderName}
            >
              {availablePresets.map((piece) => (
                // <TransparentTooltip comboPiece={piece}>
                <Stack
                  style={{
                    marginRight: "10px",
                    opacity: piece.disabled ? "0.3" : "1",
                    cursor: piece.disabled ? "default" : "pointer",
                    flexGrow: 1,
                    paddingBottom: "5px"
                  }}
                  key={piece.name}
                >
                  <div style={{ paddingLeft: "30px" }}>
                    <ComboPieceChevron
                      max={2}
                      index={2}
                      setSelection={
                        piece.disabled ? () => { } : () => selectAndFade(piece)
                      }
                      comboPiece={piece}
                      stretchShowAllText
                    />
                  </div>
                </Stack>
                // </TransparentTooltip>
              ))}
            </Stack>
          </ComboOverflowWrapper>

        </Card>
      );
    }
  }

  const [searchString, setSearchString] = useState("");
  const [filteredPresets, setFilteredPresets] = useState([])
  const [debouncingSearch, setDebouncingSearch] = useState(false)

  function searchPresets(searchString, presetActions) {
    setDebouncingSearch(false)
    const newFilteredPresets = searchString ? Object.values(presetActions)
      .map((g) => checkDependencies(g))
      .reduce(
        (result, g) =>
          result.concat(g.reduce((r2, subgroup) => r2.concat(subgroup), [])),
        []
      )
      .filter((c) => c.name.toLowerCase().includes(searchString.toLowerCase())) : [];

    setFilteredPresets(newFilteredPresets)
  }
  const debounceSearchPresets = useCallback(debounce(searchPresets, 400), []);
  const [fadeResults, setFadeResults] = useState(false)

  function renderSearchedActionPicker() {
    if (debouncingSearch) {
      return <Fade in={true} appear><LinearProgress color="secondary" sx={{ my: 2 }} /></Fade>
    }
    if (filteredPresets.length > 0) {
      return (
        <Grow in={true} appear timeout={500} >
          <Card
            style={{
              padding: "20px",
              marginTop: "10px",
              marginBottom: "20px",
              borderRadius: "4px",
              border: `1px solid ${theme.palette.secondary.darker}`
            }}
          >
            <ComboOverflowWrapper>
              <Stack
                flexWrap="wrap"
                direction="row"
                sx={{ width: "fit-content", marginLeft: "-5px" }}
                justifyContent="start"

                key={comboRenderContext.motionRenderName}
              >
                {filteredPresets.map((c) => (
                  // <TransparentTooltip comboPiece={c}>
                  <Stack
                    style={{
                      marginLeft: "40px",
                      opacity: c.disabled ? "0.3" : "1",
                      cursor: c.disabled ? "default" : "pointer",
                      flexGrow: 1,
                      paddingBottom: "5px"
                    }}
                    key={c.name}
                  >
                    <ComboPieceChevron
                      max={2}
                      index={2}
                      setSelection={
                        c.disabled ? () => { } : () => selectAndFade(c)
                      }
                      comboPiece={c}
                      stretchShowAllText
                      disabled={c.disabled}
                    />
                  </Stack>
                  // </TransparentTooltip>
                ))}
              </Stack>
            </ComboOverflowWrapper>
          </Card>
        </Grow>
      );
    } else if (searchString) {
      return (
        <Typography
          style={{ textAlign: "center", margin: "auto" }}
          sx={{ p: 2 }}
        >
          No matching combo action presets found
        </Typography>
      );
    } else {
      return null
    }
  }

  function renderActionSearchBar() {
    return <Stack direction="row" >
      <TextField
        id="action-search-bar"
        value={searchString}
        style={{ width: "100%" }}
        placeholder="search combo actions"
        size="small"
        onChange={(val) => {
          setDebouncingSearch(true)
          setSearchString(val.target.value);
          debounceSearchPresets(val.target.value, editComboPageContext.presetActions)
        }}
        color="info"
        autoFocus
        autoComplete="off"
      />

      <Button
        variant="contained"
        sx={{ ml: 1, maxHeight: "60px" }}
        onClick={(e) => setSearchString("")}
      >
        <CloseIcon />
      </Button>
    </Stack>
  }

  function renderChooseMotion() {
    return (
      <section>
        <Stack sx={{ pb: 2 }}>
          <Typography
            align="left"
            sx={{ fontWeight: "bold" }}
            variant="h5"
          >
            Motion
          </Typography>
          <FormHelperText align="left" variant="caption">
            Click through the directions for the motion
            input assuming you are facing right
          </FormHelperText>

          <EditPad
            command={command}
            setCommand={setCommand}
          />

          <FormHelperText
            align="left"
            variant="caption"
            sx={{ pt: 2 }}
          >
            Or write some fighting game notation
          </FormHelperText>
          <Input
            id="outlined-basic"
            size="small"
            label="Command"
            placeholder={"Ex: 236236"}
            value={command ?? ""}
            variant="outlined"
            onChange={(e) => {
              if (e.target.value.length === 0
                || allowedMotionCharacters.indexOf(e.target.value[e.target.value.length - 1]) >= 0) setCommand(e.target.value)
            }}
            autoComplete='off'
          />
        </Stack>
      </section>
    )
  }

  function renderChooseButtons() {
    return (
      <div>
        <Typography
          align="left"
          sx={{ fontWeight: "bold" }}
          variant="h5"
        >
          Buttons
        </Typography>
        <Stack
          sx={{ p: 2, pt: 0 }}
          styles={{ margin: "auto" }}
          direction="row"
          flexWrap="wrap"
          alignContent="flex-start"
        >
          {supportedButtons.filter((b) => !b.includes(":")).map((button, index) => (
            <div
              key={index}
              style={{
                marginTop: "5px",
                marginBottom: "5px",
                borderRadius: "5%",
                border: buttons.find((e) => e === button)
                  ? "2px solid rgba(255, 255, 255, 0.7)"
                  : "2px solid rgba(255, 255, 255, 0)",
                padding: "3px",
                cursor: "pointer",
                marginRight: "10px"
              }}
              onClick={() => {
                if (!buttons.find((e) => e === button)) {
                  setButtons([...buttons, button]);
                } else {
                  let ind = buttons.findIndex(
                    (e) => e === button
                  );
                  if (ind === buttons.length - 1) {
                    setButtons(buttons.slice(0, ind));
                  } else if (ind === 0) {
                    setButtons(buttons.slice(ind + 1));
                  } else {
                    setButtons([
                      ...buttons.slice(0, ind),
                      ...buttons.slice(ind + 1),
                    ]);
                  }
                }
              }}
            >
              {buttonRender.render.render(button)}
            </div>
          ))}
        </Stack>
      </div>
    )
  }

  const characterContext = useContext(CharacterContext)

  function renderChooseState() {
    return (
      <div>
        <Stack direction="row" alignItems="end">
          <Typography
            align="left"
            sx={{ fontWeight: "bold" }}
            variant="h5"
          >
            Player State
          </Typography>
          <Typography
            align="left"
            sx={{ fontSize: "12px", mb: "3px", ml: "6px" }}
          >
            optional
          </Typography>
        </Stack>

        <Autocomplete
          value={playerStates}
          multiple
          id="player"
          options={suggestedPiecePlayerStates}
          freeSolo
          style={{ width: "100%" }}
          onChange={(event, val) => { setPlayerStates(val); }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Jumping, Dragon Install..." size="small" />
          )}
        />
        <FormHelperText
          align="left"
          variant="caption"
          style={{ opacity: "60%" }}
        >
          <i>Choose common states or type your own and hit enter to add</i>
        </FormHelperText>
      </div>
    )
  }


  function renderActionPicker() {
    return (
      <div style={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons={true}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              ".Mui-selected": {
                color: characterContext.characterData.textColor,
              },
            }}
          >
            <Tab label="Search" {...a11yProps(1)} />
            {Object.keys(editComboPageContext.presetActions).map(
              (key, _index) => (
                <Tab label={key} key={key} {...a11yProps(1)} />
              )
            )}
            <Tab label="Custom" onClick={() => { if (presetId) resetAction() }} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <div className="custom-scroll-container" style={{ width: "100%" }}>
          <TabPanel
            value={value}
            index={0}
          >
            {renderActionSearchBar()}
            {renderSearchedActionPicker()}
          </TabPanel>
          {Object.keys(editComboPageContext.presetActions).map(
            (key, _index) => (
              <TabPanel
                value={value}
                index={_index + 1}
                style={{ padding: 0, margin: 0, width: "100%" }}
                key={key}
              >
                <Stack direction="column" style={{ flexWrap: "wrap", width: "100%" }}>
                  {editComboPageContext.presetActions[key].map((group, index) =>
                    <div key={index} style={{ width: "100%" }}>
                      {renderPresetGroup(group)}
                    </div>
                  )}
                </Stack>
              </TabPanel>
            )
          )}

          <TabPanel
            value={value}
            index={Object.keys(editComboPageContext.presetActions).length + 1}
          >
            <Stack spacing={1}>
              <TextField
                id="outlined-basic"
                size="small"
                label=" Combo Piece Name"
                variant="outlined"
                value={name}
                sx={{ mr: "100%", width: "100%" }}
                onChange={(e) => setName(e.target.value)}
                autoComplete='off'
              />
              {largeScreenSize ? null : <Divider sx={{ pt: 2 }} />}
              {largeScreenSize ?
                <Grid
                  container
                  spacing={2}
                  sx={{ width: "100%", minWidth: "600px" }}
                >
                  <Grid item xs={6}>
                    <Stack spacing={1}>
                      {renderChooseMotion()}
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    {renderChooseButtons()}
                    {renderChooseState()}
                  </Grid>
                </Grid> :
                <Stack sx={{ mt: 2 }} spacing={1} divider={<Divider />}>
                  {renderChooseMotion()}
                  {renderChooseButtons()}
                  {renderChooseState()}
                </Stack>}
            </Stack>
          </TabPanel>
        </div>
      </div>
    )
  }

  function renderEditor() {
    if (!loading) {
      return (
        <Box
          sx={{ width: "100%", maxWidth: "900px" }}
          style={{ padding: 0, margin: 0 }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="start">
            <Typography align="left" variant="h4" sx={{ fontWeight: "bold", pb: "0px" }}>
              {titlePrefix ? titlePrefix + " " : ""}ACTION
            </Typography>
            <ButtonRenderSelectorRow collapsible smallButton={!largeScreenSize} anchorRight />
          </Stack>

          {/* Preview */}
          {getCurrentComboPiece() ? (
            <Card style={{
              overflow: "visible",
              border: `1px solid ${theme.palette.secondary.darker}`
            }}>
              <CardContent
                style={{
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <ComboOverflowWrapper>
                  <Fade in={fadeSelected} timeout={200}>
                    <Stack sx={{ pl: 3, pb: "5px" }} >
                      <ComboPieceChevron
                        max={1}
                        index={0}
                        setSelection={() => { }}
                        comboPiece={getCurrentComboPiece()}
                      ></ComboPieceChevron>
                    </Stack>
                  </Fade>
                </ComboOverflowWrapper>
              </CardContent>
            </Card>
          ) : null
          }
          {renderActionPicker()}
        </Box >
      );
    }
  }

  return (
    <Stack direction="column" sx={{ width: "100%", maxWidth: shrink ? "850px" : "900px" }} style={{ minHeight: shrink ? "80vh" : "85vh", boxSizing: "border-box" }}>
      <div style={{ flexGrow: 1 }}>
        {renderLoadingSpinner()}
        {renderEditor()}

        {!noTips ? (
          <Stack sx={{ pt: 4 }} spacing={1}>
            <Typography align="left" variant="h4" sx={{ fontWeight: "bold", pb: "0px" }}>
              TIPS
            </Typography>
            <RichTextEditor
              ref={tipsRef}
              value={tips}
              placeholder="Timing, advice ETC for this combo action"
            ></RichTextEditor>
          </Stack>
        ) : null}
      </div>

      <Stack direction="row" spacing={1} sx={{ mt: 4, pb: "30px", boxSizing: "border-box" }}>
        <Button onClick={handleClose} variant="contained" color="secondary">Cancel</Button>
        {handleDelete ? <Button onClick={handleDelete} variant="contained" color="warning">Delete</Button> : ""}
        <Button onClick={saveComboPiece} variant="contained" fullWidth>{saveText}</Button>
      </Stack>
    </Stack>
  );
}

export default EditComboPiece;
