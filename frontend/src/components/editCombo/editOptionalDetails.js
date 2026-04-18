
import { _okiTags, characterNames, endStates } from "../../util/envResolverUtilEs6.js";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ChipMultiSelect from "../shared/forms/chipMultiSelect.js";

export default function EditOptionalDetails(props) {
  const difficulties = ["easy", "medium", "hard", "almost impossible"];
  const usedOptions = [
    "every match",
    "every few matches",
    "situationally",
    "rarely",
    "never",
  ];
  const practicalities = [
    "very practical",
    "fairly practical",
    "not practical",
    "twitter combo",
  ];
  const optimalities = ["low", "medium", "high", "extreme"];

  const { handleClose, handleSave, original } = props;
  const [comment, setComment] = useState(original?.comment ?? "");
  const [okiNotes, setOkiNotes] = useState(original?.oki?.notes ?? "");
  const [okiTag, setOkiTag] = useState(original?.oki?.tag ?? "");
  const [endsWith, setEndsWith] = useState(original?.oki?.endsWith ?? "");

  const [damage, setDamage] = useState(original?.stats?.damage);
  const [meterGain, setMeterGain] = useState(original?.stats?.meterGain ?? "");
  const [meterNeeded, setMeterNeeded] = useState(
    original?.stats?.meterNeeded ?? ""
  );
  const [worksOn, setWorksOn] = useState(original?.stats?.worksOn ?? []);

  const [difficulty, setDifficulty] = useState(
    original?.opinions?.difficulty ?? ""
  );
  const [used, setUsed] = useState(original?.opinions?.used ?? "");
  const [optimality, setOptimality] = useState(
    original?.opinions?.optimality ?? ""
  );
  const [practicality, setPracticality] = useState(
    original?.opinions?.practicality ?? ""
  );

  function handleSaveOptionals() {
    const optionals = {
      comment: comment,
      oki: {
        endsWith: endsWith,
        tag: okiTag,
        notes: okiNotes,
      },
      stats: {
        damage: damage,
        meterGain: meterGain,
        meterNeeded: meterNeeded,
        worksOn: worksOn,
      },
      opinions: {
        difficulty: difficulty,
        used: used,
        practicality: practicality,
        optimality: optimality,
      },
    };
    handleSave(optionals);
  }

  return (
    <div>
      <DialogContent style={{ overflow: "hidden" }}>
        <Stack spacing={2}>
          <section>
            <Typography align="left" sx={{ fontWeight: "bold", pb: 1 }}>
              {" "}
              Comments{" "}
            </Typography>
            <TextField
              id="outlined-basic"
              multiline
              size="small"
              variant="outlined"
              value={comment}
              sx={{ mr: "100%", width: "100%" }}
              onChange={(e) => setComment(e.target.value)}
            />
          </section>

          <Stack spacing={1}>
            <Typography align="left" sx={{ fontWeight: "bold" }}>
              {" "}
              Setplay / Okizeme{" "}
            </Typography>
            <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
              Ends with
            </FormHelperText>
            <Select
              style={{ height: "30px", fontSize: "14px" }}
              onChange={(e) => setEndsWith(e.target.value)}
              value={endsWith}
            >
              {endStates.map((state) => (
                <MenuItem value={state} key={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
              Type
            </FormHelperText>
            <Select
              value={okiTag}
              style={{ height: "30px", fontSize: "14px" }}
              onChange={(e) => setOkiTag(e.target.value)}
            >
              {_okiTags.map((tag) => (
                <MenuItem value={tag} key={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="outlined-basic"
              multiline
              size="small"
              variant="outlined"
              placeholder="Notes"
              value={okiNotes}
              sx={{ mr: "100%", width: "100%" }}
              onChange={(e) => setOkiNotes(e.target.value)}
            />
          </Stack>

          <Grid container spacing={2} sx={{ width: "100%", minWidth: "600px" }}>
            <Grid item xs={6}>
              <Stack sx={{ p: 1 }} spacing={1}>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  {" "}
                  Stats{" "}
                </Typography>
                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Damage
                </FormHelperText>
                <Input
                  placeholder="Number"
                  style={{ height: "30px", fontSize: "14px" }}
                  value={damage ?? ""}
                  onChange={(e) => setDamage(e.target.value)}
                  type="number"
                />

                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Meter Gain{" "}
                </FormHelperText>
                <Input
                  placeholder="Number"
                  style={{ height: "30px", fontSize: "14px" }}
                  value={meterGain ?? ""}
                  onChange={(e) => setMeterGain(e.target.value)}
                  type="number"
                />

                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Meter Needed{" "}
                </FormHelperText>
                <Input
                  placeholder="Number"
                  style={{ height: "30px", fontSize: "14px" }}
                  value={meterNeeded ?? ""}
                  onChange={(e) => setMeterNeeded(e.target.value)}
                  type="number"
                />

                <ChipMultiSelect
                  label="Works on"
                  setVal={setWorksOn}
                  _value={worksOn}
                  valuePool={characterNames}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack sx={{ p: 1 }} spacing={1}>
                <Typography align="left" sx={{ fontWeight: "bold" }}>
                  {" "}
                  Opinions{" "}
                </Typography>
                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Difficulty
                </FormHelperText>
                <Select
                  value={difficulty}
                  style={{ height: "30px", fontSize: "14px" }}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  {difficulties.map((state) => (
                    <MenuItem value={state} key={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Used
                </FormHelperText>
                <Select
                  style={{ height: "30px", fontSize: "14px" }}
                  value={used}
                  onChange={(e) => setUsed(e.target.value)}
                >
                  {usedOptions.map((state) => (
                    <MenuItem value={state} key={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Practicality
                </FormHelperText>
                <Select
                  value={practicality}
                  style={{ height: "30px", fontSize: "14px" }}
                  onChange={(e) => setPracticality(e.target.value)}
                >
                  {practicalities.map((state) => (
                    <MenuItem value={state} key={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
                  {" "}
                  Optimality
                </FormHelperText>
                <Select
                  value={optimality}
                  style={{ height: "30px", fontSize: "14px" }}
                  onChange={(e) => setOptimality(e.target.value)}
                >
                  {optimalities.map((state) => (
                    <MenuItem value={state} key={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveOptionals}>Save To Combo</Button>
      </DialogActions>
    </div>
  );
}
