import { useTheme } from "@emotion/react";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Button, Divider, FormHelperText, IconButton, Menu, Stack } from "@mui/material";
import { useState } from "react";
import ButtonRenderSelect from "../shared/buttonRenderSelect";
import DirectionRenderSelect from "../shared/directionSelect";
import MotionRenderSelect from "../shared/motionRenderSelect";
import ComboSizeSelect from "./comboSizeSelect";
import HideActionNameSelect from "./hideActionNamesSelect";
import ShowAllTagsSelect from "./showAllTagsSelect";
import VariantButtonsSelect from "./variantButtonsSelect";

export default function ComboRenderSelectorRow(props) {
  const theme = useTheme();
  const { smallButton, anchorRight, showTags } = props
  const collapsible = true
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderButton() {
    return <div>
      {smallButton ? <IconButton
        sx={{ m: "5px" }}
        style={{ width: "25px", height: "25px" }}
        onClick={handleClick}
      >
        <DisplaySettingsIcon style={{ width: "20px", height: "20px" }} />
      </IconButton> :
        <Button variant="outlined" sx={{ mb: 2, px: 1, py: 0.5 }}
          style={{ color: theme.palette.text.veryDark, fontWeight: "normal", textTransform: "none", fontSize: "12px", borderRadius: "2px" }}
          color="secondary"
          onClick={handleClick}>
          <Stack direction="row" alignItems="center">
            <DisplaySettingsIcon style={{ width: "15px", height: "15px", marginRight: "4px", }} />
            DISPLAY SETTINGS
          </Stack>
        </Button >}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={!anchorRight ? {
          vertical: 'bottom',
          horizontal: 'left',
        } : {
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={!anchorRight ? {
          vertical: 'top',
          horizontal: 'left',
        } : {
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {renderRow()}
        </div>
      </Menu>
    </div >
  }

  function renderRow() {
    return <div>
      {/* <FormHelperText
      align="left"
      variant="caption"
      style={{
        fontSize: "9px",
        color: theme.palette.text.dark,
        fontWeight: "bold",
      }}
    >
      VIEWING OPTIONS
    </FormHelperText> */}
      <Stack direction="row" style={{ flexWrap: "wrap" }}
        sx={{ mb: 1 }}>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Motion style
          </FormHelperText>
          <MotionRenderSelect />
        </Stack>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Button style
          </FormHelperText>
          <ButtonRenderSelect />
        </Stack>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Direction
          </FormHelperText>
          <DirectionRenderSelect />
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" style={{ flexWrap: "wrap" }}
        sx={{ mb: 1 }}>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Combo size
          </FormHelperText>
          <ComboSizeSelect />
        </Stack>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Common Button Variations
          </FormHelperText>
          <VariantButtonsSelect />
        </Stack>
        <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Combo action names
          </FormHelperText>
          <HideActionNameSelect />
        </Stack>
        {showTags ? <Stack sx={{ mb: 1 }}>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Tags
          </FormHelperText>
          <ShowAllTagsSelect />
        </Stack> : null}

      </Stack>
    </div>
  }
  return collapsible ? renderButton() : renderRow()
}
