import { useState, useContext } from "react";
import JsonSchemaUtils from "../../../util/jsonSchemaUtils";
import { EditComboPageContext } from "../../../context/editComboPageContext";
import { FormHelperText, Stack, Input } from "@mui/material";

export default function NumberField(props) {
  const { path, label } = props;
  const defaultValue = "";
  const editComboPageContext = useContext(EditComboPageContext);

  const [value, setValue] = useState(
    JsonSchemaUtils.getPropByString(editComboPageContext.draftDetails, path) ??
    defaultValue
  );

  function update(value) {
    try {
      value = parseInt(value)
      setValue(value);
      JsonSchemaUtils.setPropByPath(
        editComboPageContext.draftDetails,
        path,
        value
      );
    } catch (e) {

    }
  }

  return (
    <Stack>
      <FormHelperText align="left" variant="caption" sx={{ pt: 1 }}>
        {label}
      </FormHelperText>
      <Input
        placeholder="Number"
        style={{ height: "30px", fontSize: "14px" }}
        value={value}
        onChange={(e) => update(e.target.value)}
        type="number"
      />
    </Stack>
  );
}
