import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import ComboRenderUtil from "util/comboRenderUtil";
import { ComboRenderContext } from "../../context/comboRenderContext";
const selectOptions = [
  ["Extra small", ComboRenderUtil.ComboSize.EXTRA_SMALL],
  ["Small", ComboRenderUtil.ComboSize.SMALL],
  ["Regular", ComboRenderUtil.ComboSize.REGULAR]
]
export default function ComboSizeSelect() {
  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [comboSize, setComboSize] = React.useState(
    comboRenderContext.comboSize
  );

  function handleSymbolSelect(event) {
    localStorage.setItem('comboSize', event.target.value);
    comboRenderContext.setComboSize(event.target.value);
    setComboSize(event.target.value);
  }

  return (
    <Select
      value={comboSize}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {selectOptions.map((choice) => (
        <MenuItem value={choice[1]} key={choice[0]}>
          {choice[0]}
        </MenuItem>
      ))}
    </Select>
  );
}
