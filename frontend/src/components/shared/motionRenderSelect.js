import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function MotionRenderSelect(props) {

  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [motionRenderName, setMotionRenderName] = React.useState(
    comboRenderContext.motionRenderName
  );
  function handleSymbolSelect(event) {
    localStorage.setItem('motionRenderName', event.target.value);
    comboRenderContext.setMotionRenderName(event.target.value, theme);
    setMotionRenderName(event.target.value);
  }
  return (
    <Select
      value={motionRenderName}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {comboRenderContext.motionRenderChoices.map((choice) => (
        <MenuItem value={choice} key={choice}>
          {choice}
        </MenuItem>
      ))}
    </Select>
  );
}
