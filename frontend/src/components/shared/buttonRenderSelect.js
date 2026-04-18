import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function ComboButtonRenderSelect(props) {

  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [symbolStyle, setSymbolStyle] = React.useState(
    comboRenderContext.buttonRender.name
  );
  function handleSymbolSelect(event) {
    localStorage.setItem('buttonRenderName', event.target.value);
    comboRenderContext.setButtonRender(event.target.value, theme);
    setSymbolStyle(event.target.value);
  }
  return (
    <Select
      value={symbolStyle}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {comboRenderContext.buttonRenderChoices.map((choice) => (
        <MenuItem value={choice} key={choice}>
          {choice}
        </MenuItem>
      ))}
    </Select>
  );
}
