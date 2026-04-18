import { useState, useContext } from "react";
import ChipMultiSelect from "../../shared/forms/chipMultiSelect";
import JsonSchemaUtils from "../../../util/jsonSchemaUtils";
import { EditComboPageContext } from "../../../context/editComboPageContext";

export default function StringMultiSelectorField(props) {
  const { path, pool, label } = props;
  const defaultValue = [];
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
    <div style={{ minWidth: "200px" }}>
      <ChipMultiSelect
        label={label}
        setVal={update}
        _value={value}
        valuePool={pool}
      />
    </div>
  );
}
