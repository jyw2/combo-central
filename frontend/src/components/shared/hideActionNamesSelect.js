import { MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ComboRenderContext } from "../../context/comboRenderContext";

export default function HideActionNameSelect() {

  const theme = useTheme();
  const comboRenderContext = useContext(ComboRenderContext);

  const [hideActionName, setHideActionName] = React.useState(
    comboRenderContext.hideActionName
  );

  function handleSymbolSelect(event) {
    localStorage.setItem('hideActionName', event.target.value);
    comboRenderContext.setHideActionName(event.target.value);
    setHideActionName(event.target.value);
  }

  return (
    <Select
      value={hideActionName}
      displayEmpty
      onChange={handleSymbolSelect}
      size="small"
      style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
    >
      {[["Show names", false], ["Hide names", true]].map((choice) => (
        <MenuItem value={choice[1]} key={choice[0]}>
          {choice[0]}
        </MenuItem>
      ))}
    </Select>
  );
}
