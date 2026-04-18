import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function ShowAllTagsSelect() {
  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [showAllTags, setShowAllTags] = React.useState(
    comboRenderContext.showAllTags
  );

  function handleSymbolSelect(event) {
    localStorage.setItem('showAllTags', event.target.value);
    comboRenderContext.setShowAllTags(event.target.value);
    setShowAllTags(event.target.value);
  }

  return (
    <Select
      value={showAllTags}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {[["Show a few tags", false], ["Show all tags", true]].map((choice) => (
        <MenuItem value={choice[1]} key={choice[0]}>
          {choice[0]}
        </MenuItem>
      ))}
    </Select>
  );
}
