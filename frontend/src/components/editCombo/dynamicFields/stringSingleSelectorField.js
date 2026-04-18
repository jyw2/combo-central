import { useState, useContext } from "react";
import JsonSchemaUtils from "../../../util/jsonSchemaUtils";
import { EditComboPageContext } from "../../../context/editComboPageContext";
import { Select, MenuItem, FormHelperText, Stack } from "@mui/material";

export default function StringSingleSelectorField(props) {
  const { path, pool, label } = props;
  const defaultValue = "";
  const editComboPageContext = useContext(EditComboPageContext);

  const [value, setValue] = useState(
    JsonSchemaUtils.getPropByString(editComboPageContext.draftDetails, path) ??
      defaultValue
  );

  function update(value) {
    setValue(value);
    JsonSchemaUtils.setPropByPath(
      editComboPageContext.draftDetails,
      path,
      value
    );
  }

  return (
    <Stack>
      <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
        {label}
      </FormHelperText>
      <Select
        value={value}
        style={{
          height: "30px",
          fontSize: "14px",
          width: "150px",
        }}
        onChange={(e) => update(e.target.value)}
      >
        {pool.map((state) => (
          <MenuItem value={state} key={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}
