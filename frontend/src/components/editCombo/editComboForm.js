import { useState } from "react";
import EditComboSequenceCard from "./editComboSequenceCard";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { LinearProgress, Alert } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import ChipMultiSelect from "../shared/forms/chipMultiSelect.js";
import HttpClient from "../../services/httpClient.js";
import { CharacterContext } from "../../context/characterContext.js";
import CharacterHeader from "../shared/characterHeader.js";
import { useContext } from "react";
import Collapse from "@mui/material/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import { EditComboPageContext } from "../../context/editComboPageContext.js";
import EditComboDetailCard from "./editComboDetailCard.js";
import RichTextEditor from "./richTextEditor/richTextEditor.js";
import { UserContext } from "../../context/userContext.js";
import { Input } from "@mui/material";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ObjectUtils from "../../util/objectUtils.js";
import { useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { supportedOkiTags } from "../../util/envResolverUtilEs6.js";
import { ComboDetailsSchemaContext } from "context/comboDetailsSchemaContext.js";
import FooterAd from "components/footerAd";

export default function EditComboForm() {
  let { editType, charId, comboId } = useParams();
  const theme = useTheme();
  const characterContext = useContext(CharacterContext);
  const editComboPageContext = useContext(EditComboPageContext);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))
  const comboDetailsSchemaContext = useContext(ComboDetailsSchemaContext)

  useEffect(() => {
    if (editType === "update" && !userContext.isLoadingUser) {
      HttpClient.getCombo(comboId).then(({ data, status }) => {
        if (status === 404 || status === 500) {
          navigate("/404", { relative: "path", replace: true })
        } else if (status === 200) {
          if (data.ownerId !== userContext.userManager.getId()) {
            navigate("/403", { relative: "path", replace: true });
          }
          editComboPageContext.draftDetails = data.details;

          editComboPageContext.setOriginal(data);
          setComboPieces(data.comboPieces);
          setComment(data.comment?.text);
          commentRef.current = data.comment?.text;
          setOkiNotes(data.oki?.notes?.text);
          okiNotesRef.current = data.oki?.notes?.text;
          setOkiTags(data.oki?.tags);
          setDemoLink(data.demoLink);
          setName(data.name);

          const hasOptionals =
            ObjectUtils.hasValue(data.details) ||
            ObjectUtils.hasValue(data.comment) ||
            ObjectUtils.hasValue(data.oki) ||
            ObjectUtils.hasValue(data.demoLink);

          if (hasOptionals) setShowOptionals(true);
        }
      });
    }
  }, [userContext.isLoadingUser]);

  useEffect(() => {
    HttpClient.getPresetActions(charId).then((presets) => {
      editComboPageContext.setPresets(presets);
    });
  }, []);

  const [isSaving, setIsSaving] = useState(false);
  const [showOptionals, setShowOptionals] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [comboPieces, setComboPieces] = useState([]);

  const [comment, setComment] = useState("");
  const [okiNotes, setOkiNotes] = useState("");
  const [okiTags, setOkiTags] = useState([]);
  const [demoLink, setDemoLink] = useState("");
  const [name, setName] = useState("")

  let commentRef = useRef("");
  let okiNotesRef = useRef("");

  async function submit() {
    setIsSaving(true);
    setErrorMessage(null);
    try {
      if (comboPieces.length < 1) {
        setErrorMessage("Combo cannot be empty");
        throw new Error();
      } else if (!name) {
        setErrorMessage("Combo needs a name");
        throw new Error();
      }

      try {
        let comboPayload = {
          comboPieces,
          comment: {
            text: commentRef.current,
          },
          oki: {
            tags: okiTags,
            notes: {
              text: okiNotesRef.current,
            },
          },
          demoLink: demoLink,
          details: editComboPageContext.draftDetails,
          name: name,
        };

        if (!showOptionals) {
          comboPayload.comment = {
            text: "",
          };
          comboPayload.oki = {
            tags: [],
            notes: {
              text: "",
            },
          };
          comboPayload.demoLink = "";
          comboPayload.details = {};
        }

        var res;
        const token = await userContext.userManager.getToken();
        if (editType === "create") {
          comboPayload.charId = charId;
          comboPayload.ownerId = userContext.userManager.getId();
          comboPayload.still_works = {
            creator: "yes",
            viewers: {
              yes: 0,
              no: 0,
            },
          };
          res = await HttpClient.sendComboCreate(comboPayload, token);
        } else {
          res = await HttpClient.sendComboUpdate(comboPayload, comboId, token);
        }

        if (res._id) {
          navigate(`/combo/${charId}/${res._id}`, {
            relative: "path",
          });
        } else if (res.validation_errors) {
          setErrorMessage("Some fields are invalid");
        } else {
          throw new Error("Error while saving");
        }
      } catch (e) {
        setErrorMessage(e.message);
      }
    } finally {
      setIsSaving(false);
    }
  }

  const renderDetails = () => {
    return Object.entries(
      comboDetailsSchemaContext.comboDetailsSchema
    ).map(([detailName, detailInfo], index) => (
      <EditComboDetailCard
        draft={editComboPageContext.draft}
        subDetails={detailInfo}
        name={detailName}
        key={detailName}
      />
    ));
  }


  return (
    <Stack
      style={{ minHeight: "100vh" }}
      sx={{ flexGrow: 1, m: "auto", pb: 10, width: { sx: "100%", md: "900px" } }}
    >
      {/* Headers */}
      <Stack sx={{ mb: { xs: 3, md: 0 } }}>
        <CharacterHeader
          entity={`${editType === "create" ? "CREATE" : "UPDATE"} COMBO`}
          redirectOverride={"/combo/create"}
        ></CharacterHeader>
      </Stack>

      {editType === "update" && !editComboPageContext.original._id ? (
        <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
          <LinearProgress color="secondary" />
        </Card>
      ) : (
        <Stack spacing={2}>
          <EditComboSequenceCard
            editType={editType}
            comboPieces={comboPieces}
            setComboPieces={setComboPieces}
          />

          <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
            <div style={{ height: "1px" }}>
              <Stack
                direction="row"
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "15px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  NAME
                </Typography>
              </Stack>
            </div>
            <Input
              style={{ marginLeft: "0" }}
              defaultValue={name}
              onBlur={(event) => setName(event.target.value)}
              fullWidth
            ></Input>
          </Card>

          <Collapse in={showOptionals} style={{ marginTop: "0" }}>
            <Stack spacing={2} style={{ marginTop: "20px" }}>
              <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
                <div style={{ height: "1px" }}>
                  <Stack
                    direction="row"
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "15px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      DESCRIPTION
                    </Typography>
                    <FormHelperText
                      align="left"
                      variant="caption"
                      sx={{ pl: 1, pt: "11px" }}
                      style={{
                        color: theme.palette.text.dark,
                        fontWeight: "bold",
                      }}
                    >
                      optional
                    </FormHelperText>
                  </Stack>
                </div>
                <RichTextEditor
                  ref={commentRef}
                  value={comment}
                  placeholder="General tips, tricks or any other comments"
                ></RichTextEditor>
              </Card>

              <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
                <div style={{ height: "1px" }}>
                  <Stack
                    direction="row"
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "15px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      DEMO VIDEO LINK
                    </Typography>
                    <FormHelperText
                      align="left"
                      variant="caption"
                      sx={{ pl: 1, pt: "11px" }}
                      style={{
                        color: theme.palette.text.dark,
                        fontWeight: "bold",
                      }}
                    >
                      optional
                    </FormHelperText>
                  </Stack>
                </div>
                <Stack>
                  <Input
                    style={{ marginLeft: "0" }}
                    defaultValue={demoLink}
                    onBlur={(event) => setDemoLink(event.target.value)}
                    placeholder="https://youtube.com/..."
                  ></Input>
                </Stack>
              </Card>

              <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
                <div style={{ height: "1px" }}>
                  <Stack
                    direction="row"
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "15px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      SETPLAY / OKIZEME
                    </Typography>
                    <FormHelperText
                      align="left"
                      variant="caption"
                      sx={{ pl: 1, pt: "11px" }}
                      style={{
                        color: theme.palette.text.dark,
                        fontWeight: "bold",
                      }}
                    >
                      optional
                    </FormHelperText>
                  </Stack>
                </div>
                <Stack spacing={1}>
                  <ChipMultiSelect
                    label="Tags"
                    setVal={setOkiTags}
                    _value={okiTags}
                    valuePool={
                      supportedOkiTags
                    }
                  ></ChipMultiSelect>
                  <RichTextEditor
                    ref={okiNotesRef}
                    value={okiNotes}
                    placeholder="What to do after the combo"
                  ></RichTextEditor>
                </Stack>
              </Card>

              {renderDetails()}
            </Stack>
          </Collapse>

          <Stack direction="row" sx={{ px: { xs: 1, md: 0 } }}>
            <Button
              style={{
                backgroundColor: characterContext.characterData.color,
                flexGrow: 0.3,
                marginRight: "10px",
              }}
              aria-label="account"
              variant="contained"
              onClick={() => setShowOptionals(!showOptionals)}
            >
              {showOptionals ? <CloseIcon></CloseIcon> : <AddIcon />}
              {showOptionals ? "Remove optionals" : "Add Optionals"}
            </Button>

            <Button
              style={{
                backgroundColor: theme.palette.anchor.dark,
                flexGrow: 1,
              }}
              variant="contained"
              disabled={isSaving}
              onClick={submit}
            >
              Submit
            </Button>
          </Stack>

          <FormHelperText
            style={{ marginTop: "2px" }}
            align="left"
            variant="caption"
            sx={{ px: { xs: 1, md: 0 } }}
          >
            Add optional info to help others find your combo
          </FormHelperText>

          {isSaving ? <LinearProgress color="secondary" /> : null}
          {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
          <Stack sx={{ paddingTop: 2, width: "100%" }}>
            <FooterAd />
          </Stack >
        </Stack>
      )}
    </Stack>
  );
}
