import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function VariantButtonsSelect() {

  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [collapseButtonRender, setCollapseButtonRender] = React.useState(
    comboRenderContext.collapseButtonRender
  );

  function handleSymbolSelect(event) {
    localStorage.setItem('collapseButtonRender', event.target.value);
    comboRenderContext.setCollapseButtonRender(event.target.value);
    setCollapseButtonRender(event.target.value);
  }

  return (
    <Select
      value={collapseButtonRender}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {[["Show all button variations", false], ["Collapse into single button", true]].map((choice) => (
        <MenuItem value={choice[1]} key={choice[0]}>
          {choice[0]}
        </MenuItem>
      ))}
    </Select>
  );
}
