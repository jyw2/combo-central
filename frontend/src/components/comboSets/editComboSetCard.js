import OverflowCard from "components/shared/overflowCard";
import { useContext, useState, useEffect } from "react";
import {
  Stack,
  Autocomplete,
  Chip,
  FormHelperText,
  TextField,
  Button,
  LinearProgress,
  Alert,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import HttpClient from "services/httpClient";
import { UserContext } from "context/userContext";
import CheckIcon from "@mui/icons-material/Check";
import ComboPreviewCard from "components/shared/comboPreviewCard";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function EditComboSetCard(props) {
  const { charId, firstComboId, compact, submitCallback, update, comboSetId, affectTitle } =
    props;
  const theme = useTheme();
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [complete, setIsComplete] = useState(false);
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    document.title = `${(affectTitle && name) ? name : ""} Combo Set`;
  }, [name]);

  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const [successMessage, setSuccessMessage] = useState(null);

  const [comboSet, setComboSet] = useState(null);

  useEffect(() => {
    if (comboSetId) {
      async function fetchAndInit() {
        const { data, status } = await HttpClient.getComboSet(comboSetId);
        if (status === 404 || status === 500) {
          navigate("/404", { relative: "path", replace: true })
        } else if (status === 200) {
          if (data.ownerId !== userContext.userManager.getId()) {
            navigate("/403", { relative: "path", replace: true });
          }

          setComboSet(data);
          setName(data.name);
          setTags(data.tags);
          setCombos(data.combos);
        }
      }
      fetchAndInit();
    }
  }, [comboSetId]);

  async function submit() {
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!name) {
      setErrorMessage("Name is required");
      return;
    }
    try {
      setIsSaving(true);
      const token = await userContext.userManager.getToken();
      if (update) {
        await HttpClient.sendComboSetUpdate(
          {
            name,
            tags,
            charId,
            comboIds: combos.map((c) => c._id),
          },
          comboSetId,
          token
        );
      } else {
        await HttpClient.sendComboSetCreate(
          {
            name,
            tags,
            charId,
            comboIds: firstComboId ? [firstComboId] : [],
          },
          token
        );
      }

      setTimeout(() => {
        if (compact) {
          setName("");
          setTags([]);
          setIsSaving(false);
          setSuccessMessage(`Added combo to new combo set '${name}'`, {
            relative: "path",
          });
        } else {
          navigate(`/combo-set/${charId}/${comboSet?._id}`);
        }
      }, 300);
      //   submitCallback();
    } catch (e) {
      setErrorMessage("error occurred");
      setIsSaving(false);
    }
  }
  return (
    <Stack>
      <OverflowCard
        title={`${update ? "UPDATE" : "CREATE"} COMBO SET`}
        noCorners={compact}
      >
        {!comboSet && update ? (
          <LinearProgress sx={{ my: 6, mx: 4 }} color="secondary" />
        ) : null}
        <Collapse sx={{ p: compact ? "" : 2, }} in={!!(!update || comboSet)}>
          <Stack>
            <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
              Name
            </FormHelperText>
            <TextField
              required
              onKeyDown={(e) => e.stopPropagation()}
              value={name}
              id="combo-set-name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              size="small"
              disabled={isSaving}
              autoComplete="off"
            />
          </Stack>
          <Stack>
            <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
              Tags
            </FormHelperText>
            <Autocomplete
              disabled={isSaving}
              multiple
              onKeyDown={(e) => e.stopPropagation()}
              id="tags-filled"
              options={[]}
              freeSolo
              value={tags}
              onChange={(e, newTags) => {
                setTags(newTags);
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  style={{ maxWidth: "100%" }}
                  {...params}
                  size="small"
                  placeholder="BnB, easy ..."
                />
              )}
            />
            <FormHelperText
              align="left"
              variant="caption"
              style={{ opacity: "60%" }}
            >
              <i>Hit enter to confirm tag</i>
            </FormHelperText>
          </Stack>

          {update && !compact ? (
            <Stack spacing={1} sx={{ width: "100%", py: 3, position: "relative" }}>
              {combos?.map((combo, i) => (
                <Stack direction="row" alignItems="center" key={combo._id} style={{ position: "relative" }} >
                  <Button
                    sx={{
                      height: "35px",
                      position: "absolute", right: "10px", top: "10px",
                      border: `solid 0.5px ${theme.palette.secondary.main}`,
                      boxShadow: "rgba(0, 0, 0, 0.8) 0px 0px 15px",
                      zIndex: 10
                    }}
                    style={{
                      width: "30px",
                    }}
                    onClick={() => setCombos(combos.filter((c, i2) => i !== i2))}
                    variant="contained"
                  >
                    <DeleteIcon />
                  </Button>
                  <ComboPreviewCard noClick combo={combo} charId={charId} />
                </Stack>
              ))}
              {combos.length === 0 ? (
                <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                  <Typography textAlign="center">
                    No combos - click the
                  </Typography>
                  <PlaylistAddIcon />
                  <Typography textAlign="center">
                    button on a combo page to add
                    it to this set!
                  </Typography>
                </Stack>
              ) : null}
            </Stack>
          ) : null}


        </Collapse>
      </OverflowCard>
      <Button
        style={{
          backgroundColor: theme.palette.anchor.dark,
          flexGrow: 1,
          marginTop: "10px",
        }}
        variant="contained"
        disabled={isSaving}
        onClick={submit}
      >
        Submit
      </Button>

      {isSaving ? <LinearProgress sx={{ my: 1 }} color="secondary" /> : null}
      {
        errorMessage ? (
          <Alert style={{ marginTop: "6px" }} severity="error">
            {errorMessage}
          </Alert>
        ) : null
      }
      {
        successMessage ? (
          <Alert
            icon={
              <CheckIcon
                fontSize="inherit"
                style={{ color: theme.palette.text.primary }}
              />
            }
            style={{ marginTop: "6px" }}
            severity="success"
          >
            {successMessage}
          </Alert>
        ) : null
      }
    </Stack>
  );
}
