import { useTheme } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckIcon from "@mui/icons-material/Check";
import {
  Alert,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import EditComboSetCard from "components/comboSets/editComboSetCard";
import ComboSetSearchCard from "components/shared/comboSetSearch/comboSetSearchCard";
import { UserContext } from "context/userContext";
import { useContext, useEffect, useState } from "react";
import HttpClient from "services/httpClient";

export default function ComboSetDropDown(props) {
  const { closeCallback, open, anchorEl, setAnchorEl, comboId, charId } = props;
  const { comboSets, setComboSets } = useState(null);
  const [createComboSet, setCreateComboSet] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const theme = useTheme();

  const userContext = useContext(UserContext);

  async function handleAddToComboSet(c) {
    setErrorMessage(null);
    setSuccessMessage(null);
    const token = await userContext.userManager.getToken();
    c.comboIds.push(comboId);
    try {
      await HttpClient.sendComboSetUpdate(c, c._id, token);
      setSuccessMessage("Added to combo set");
    } catch (e) {
      setErrorMessage("error occured");
    }
  }

  useEffect(() => {
    if (open) {
      setCreateComboSet(false);
      setSuccessMessage(null);
      setErrorMessage(null);
    }
  }, [open]);

  return (
    // TODO just reuse the combo set search
    <Menu
      open={open}
      onClose={closeCallback}
      anchorEl={anchorEl}
      MenuListProps={{
        sx: {
          py: 0,
          mt: "14px",
          backgroundColor: "transparent",
          width: "375px",
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div>
        {createComboSet ? (
          <EditComboSetCard
            firstComboId={comboId}
            compact
            charId={charId}
            submitCallback={() => setAnchorEl(null)}
          />
        ) : (
          <div>
            <Typography
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: "20px",
                position: "absolute",
                top: "-12px",
                zIndex: "20",
              }}
            >
              ADD TO COMBO SET
            </Typography>
            <ComboSetSearchCard
              onSetClick={(c) => handleAddToComboSet(c)}
              isSetDisabled={(c) => c.comboIds?.includes(comboId)}
              noQParams
              userId={userContext.userManager.getId()}  
            />
            {errorMessage ? (
              <Alert style={{ borderRadius: "0" }} severity="error">
                {errorMessage}
              </Alert>
            ) : null}
            {successMessage ? (
              <Alert
                icon={
                  <CheckIcon
                    fontSize="inherit"
                    style={{ color: theme.palette.text.primary }}
                  />
                }
                style={{ borderRadius: "0" }}
                severity="success"
              >
                {successMessage}
              </Alert>
            ) : null}
          </div>
        )}
      </div>

      <Divider />
      <MenuItem
        onClick={() => setCreateComboSet(!createComboSet)}
        style={{ paddingTop: "6px" }}
      >
        <ListItemIcon>
          {createComboSet ? (
            <ArrowBackIosIcon style={{ width: "16px" }} />
          ) : (
            <AddIcon />
          )}
        </ListItemIcon>
        <ListItemText>
          {createComboSet
            ? "Add to existing combo set"
            : "Create new combo set"}
        </ListItemText>
      </MenuItem>
    </Menu>
  );
}
