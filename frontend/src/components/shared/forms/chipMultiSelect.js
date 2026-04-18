import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import FormHelperText from "@mui/material/FormHelperText";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { ComboPieceUtil } from "util/comboPieceUtil";
import { rootPath } from "../../../util/envResolverUtilEs6"

export default function ChipMultiSelect(props) {
  let { _value, setVal, valuePool, label, useIcons, charSelect } = props;

  function handleSelect(event) {
    let oldValue = _value;
    const {
      target: { value },
    } = event;
    let newValue = value;
    if (
      (typeof newValue === "string" ? newValue.split(",") : newValue).indexOf(
        "All"
      ) !== -1
    ) {
      if (oldValue?.length == valuePool.length) {
        setVal([]);
      } else {
        setVal(valuePool);
      }
    } else {
      setVal(
        // On autofill we get a stringified newValue.
        typeof newValue === "string" ? newValue.split(",") : newValue
      );
    }
  }

  return (
    <Stack style={{ flexGrow: 1 }}>
      <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
        {label}
      </FormHelperText>
      <Select
        style={{ fontSize: "14px", width: "100%", maxWidth: "300px" }}
        multiple
        size="small"
        value={_value}
        onChange={handleSelect}
        renderValue={(_value) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {_value.map((_value) => (
              <Chip avatar={charSelect ? <Avatar alt={_value} src={require(`../../../${rootPath}/images/${_value}-chip-icon.png`)} /> : null} size="small"
                key={_value}
                label={charSelect ? ComboPieceUtil.formatDetail(_value) : _value} />
            ))}
          </Box>
        )}
      >
        <MenuItem value={"All"}>
          <Checkbox checked={_value.length === valuePool.length} />
          <ListItemText primary={"All"} />
        </MenuItem>
        {valuePool.map((v) => (
          <MenuItem value={v} key={v}>
            <Checkbox checked={_value.indexOf(v) > -1} />
            <ListItemText primary={charSelect ? ComboPieceUtil.formatDetail(v) : v} />
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
