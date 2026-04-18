import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box, Divider, Drawer, List,
  ListItem, ListItemButton,
  ListItemIcon,
  ListItemText, Menu,
  MenuItem, Select, Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronChainContentWrapper from "components/shared/chevronChainContentWrapper";
import SimpleSnackbar from "components/shared/snackbar";
import { CharacterContext } from "context/characterContext";
import { ToastContext } from "context/toastContext";
import { getAuth, signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseUserManager, UserContext } from "../../context/userContext";
import { envListOverride } from "../../util/envResolverUtilEs6";
import "../../styles/navBar.css";
import ChevronChain from "../shared/chevronChain";
import { sortBy } from "lodash"
import environments from "environments";
import { frontEndUrl } from "env";

function NavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))
  const characterContext = useContext(CharacterContext)

  const envs = envListOverride ?? environments
  var host = window.location.host
  var subdomain = host.split('.')[0]
  const noEnv = envs.findIndex((e) => e.subDomain === subdomain) < 0

  const toastContext = useContext(ToastContext)
  const userContext = useContext(UserContext);
const auth = getAuth();

  const handleProfileClick = (event) => {
    setAnchorElActionsDropdown(null)
    userContext.userManager?.isLoggedIn()
      ? toggleDrawer(true)(event)
      : navigate("/login");
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  useEffect(() => {
    if (toastContext.toastContent) {
      setOpenSnackbar(false)
      setTimeout(() =>
        setOpenSnackbar(true), 0)
    }
  }, [toastContext.toastContent])

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem onClick={() => setAnchorElActionsDropdown(null)} key="My combos" disablePadding>
          <Link
            to={characterContext.characterData?.id ?
              `/user/${userContext.userManager?.getId()}/combos/${characterContext.characterData?.id}`
              : `/user/${userContext.userManager?.getId()}/combos`}
            style={{ width: "100%", textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
              </ListItemIcon>
              <ListItemText primary="MY COMBOS" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={() => setAnchorElActionsDropdown(null)} key="My likes" disablePadding>
          <Link
            to={characterContext.characterData?.id ?
              `/user/${userContext.userManager?.getId()}/likes/${characterContext.characterData?.id}`
              : `/user/${userContext.userManager?.getId()}/likes`}
            style={{ width: "100%", textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="MY LIKES" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem onClick={() => setAnchorElActionsDropdown(null)} key="My combo sets" disablePadding>
          <Link
            to={characterContext.characterData?.id ?
              `/user/${userContext.userManager?.getId()}/combosets/${characterContext.characterData?.id}`
              : `/user/${userContext.userManager?.getId()}/combosets`}
            style={{ width: "100%", textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ListAltIcon></ListAltIcon>
              </ListItemIcon>
              <ListItemText primary="MY COMBO SETS" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => setAnchorElActionsDropdown(null)} key="logout" disablePadding>
          <ListItemButton
            onClick={() => {
              signOut(auth).then(() => {
                userContext.setUserManager(new FirebaseUserManager(null));
                navigate("/");
                toastContext.setToastContent("Logged out")
                setOpenSnackbar(true)
              });
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="SIGN OUT" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  const [anchorElSearchDropdown, setAnchorElSearchDropdown] =
    React.useState(null);
  const [anchorElActionsDropdown, setAnchorElActionsDropdown] =
    React.useState(null);
  const open = Boolean(anchorElSearchDropdown);
  const openActions = Boolean(anchorElActionsDropdown);

  function renderChevronChain(grow) {
    if (noEnv) return null
    return (
      <ChevronChain
        secondaryColor={characterContext.characterData.color}
        height={40}
        grow
        content={[
          <ChevronChainContentWrapper clickcallback={(event) => {
            setAnchorElSearchDropdown(event.currentTarget);
          }}>
            <IconButton
              disableRipple
              aria-label="search">
              <SearchIcon />
            </IconButton>
          </ChevronChainContentWrapper>
          ,
          <ChevronChainContentWrapper
            url={characterContext.characterData?.id ? `/combo/edit/create/${characterContext.characterData?.id}` : "/combo/create"}
            clickcallback={() => setAnchorElActionsDropdown(null)}>
            <IconButton
              disableRipple
              aria-label="add"
            >
              <AddIcon />
            </IconButton>
          </ChevronChainContentWrapper>,
          <ChevronChainContentWrapper clickcallback={handleProfileClick}>
            <IconButton
              disableRipple
              aria-label="account"
            >
              <PersonOutlineIcon />
            </IconButton>
          </ChevronChainContentWrapper>
        ]}
      />
    )
  }

  function renderSelect(skinny = false) {
    return (
      <Select
        style={{
          color: theme.palette.text.primary,
          padding: 0,
          margin: 0,
          fontWeight: "bold",
          height: skinny ? "25px" : "",
          boxSizing: "border-box"
        }}
        size="small"
        value={window.location.hostname.split('.')[0]}
      >
        {sortBy((envListOverride ?? environments), (e) => e.name).map(({ name, subDomain }) => (
          <MenuItem style={{ textDecoration: "none" }}
            key={name}
            value={subDomain}
            onClick={() => window.location.href = `//${subDomain}.${frontEndUrl}/`}
          >
            {name}
          </MenuItem>

        ))}
      </Select>
    )
  }

  return (
    <Stack
      style={{
        backgroundColor: "#000000",
        position: "sticky",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 100,
        boxSizing: "border-box",
        height: "40px",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 8px",
      }}
      sx={{ pl: 1, m: 0 }}
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >

      <div style={{ position: "absolute" }}>
        <SimpleSnackbar message={toastContext.toastContent} open={openSnackbar} setOpen={setOpenSnackbar} />
      </div>
      <Menu
        id="actions-bar"
        anchorEl={anchorElActionsDropdown}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={openActions}
        onClose={() => setAnchorElActionsDropdown(null)}
        role="menu"
        style={{ zIndex: 200, overflow: "visible" }}
        MenuListProps={{
          sx: {
            p: "0",
            borderRadius: "2px",
            overflow: "visible"
          }
        }}
      >
        <Stack spacing={2} style={{ backgroundColor: theme.palette.anchor.dark }}>
          {renderChevronChain(true)} {renderSelect()}
        </Stack>
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={anchorElSearchDropdown}
        open={open}
        onClose={() => setAnchorElSearchDropdown(null)}
        role="menu"
        style={{ zIndex: 201 }}
        MenuListProps={{
          sx: {
            p: "0",
            borderRadius: "2px"
          }
        }}
      >
        <div>
          <MenuItem style={{ backgroundColor: "black" }} height={40} >
            <Link to={characterContext.characterData?.id ? `/combo/search/${characterContext.characterData?.id}` : "/combo/search"}
              onClick={() => { setAnchorElSearchDropdown(null); setAnchorElActionsDropdown(null) }}>
              <IconButton
                disableRipple
                aria-label="search"
              >
                <SearchIcon />
                <KeyboardDoubleArrowRightIcon />
                <Typography style={{ paddingLeft: "6px" }}>Combos</Typography>
              </IconButton>
            </Link>
          </MenuItem>
          <MenuItem style={{ backgroundColor: characterContext.characterData.color }} height={40} >
            <Link to={characterContext.characterData?.id ? `/combo-set/search/${characterContext.characterData?.id}` : "/combo-set/search"}
              onClick={() => { setAnchorElSearchDropdown(null); setAnchorElActionsDropdown(null) }}>
              <IconButton
                disableRipple
                aria-label="search"
              >
                <SearchIcon />
                <ListAltIcon />
                <Typography style={{ paddingLeft: "6px" }}>Combo Sets</Typography>
              </IconButton>
            </Link>
          </MenuItem>
        </div>
      </Menu>
      {/* <Avatar alt="game icon" src={gameIcon}></Avatar> */}
      <Stack direction="row" alignItems="center">
        <Link to="/" style={{ marginRight: "15px", }}>
          <img src={require("../../images/icon.png")} style={{ width: "25px", marginTop: "2px", cursor: "pointer" }}></img>
        </Link>
        {largeScreenSize ? renderSelect(true) : null}
      </Stack>

      {
        largeScreenSize ?
          renderChevronChain() : <IconButton onClick={(event) => {
            setAnchorElActionsDropdown(event.currentTarget);
          }}><MenuIcon /></IconButton>
      }

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Stack >
  );
}

export default NavBar;
