import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function DirectionRenderSelect() {

  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [direction, setDirection] = React.useState(
    comboRenderContext.motionDirection
  );
  function handleSymbolSelect(event) {
    localStorage.setItem('motionRenderDirection', event.target.value);
    comboRenderContext.setDirection(event.target.value);
    setDirection(event.target.value);
  }
  return (
    <Select
      value={direction}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {comboRenderContext.directionChoices.map((choice) => (
        <MenuItem value={choice} key={choice}>
          {choice}
        </MenuItem>
      ))}
    </Select>
  );
}
