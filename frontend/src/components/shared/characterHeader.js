import SearchIcon from "@mui/icons-material/Search";
import {
  Fade,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CharacterContext } from "../../context/characterContext";
import "../../styles/navBar.css";
import ChevronChain from "../shared/chevronChain";
import { rootPath } from "../../util/envResolverUtilEs6"

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronChainContentWrapper from "./chevronChainContentWrapper";
import FadeOnLoadImage from "./fadeOnLoadImage";

export default function CharacterHeader(props) {
  const navigate = useNavigate()

  const { entity, hideButtons, userScoped, padded, redirectOverride } = props;
  const location = useLocation();
  const theme = useTheme();
  const characterContext = useContext(CharacterContext);
  const medScreenSize = useMediaQuery(theme.breakpoints.up('md'))
  // const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))
  function getCharacterNav() {
    return [
      <ChevronChainContentWrapper >
        {/* <IconButton
          disableRipple
          aria-label="search"
        >
          <SearchIcon />
        </IconButton> */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <SwapHorizIcon style={{ color: theme.palette.text.primary }} />
          {medScreenSize ?
            <Typography style={{ color: theme.palette.text.primary, fontWeight: "bold", paddingRight: "8px", textWrap: "noWrap" }}>
              CHANGE CHARACTER
            </Typography> : null}
        </Stack>

      </ChevronChainContentWrapper>
    ];
  }

  const [anchorElSearchDropdown, setAnchorElSearchDropdown] =
    React.useState(null);
  const open = Boolean(anchorElSearchDropdown);

  function renderMenu() {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorElSearchDropdown}
        open={open}
        onClose={() => setAnchorElSearchDropdown(null)}
        role="menu"
        MenuListProps={{
          sx: {
            p: "0",
            borderRadius: "2px",
          },
        }}
      >
        <div>
          <MenuItem style={{ backgroundColor: characterContext.characterData.darkColor }} height={40}>
            <Link
              to={`/combo/search/${characterContext.characterData.id}`}
              onClick={() => {
                setAnchorElSearchDropdown(null);
              }}
            >
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
          <MenuItem
            style={{ backgroundColor: characterContext.characterData?.color }}
            height={40}
          >
            <Link
              to={`/combo-set/search/${characterContext.characterData.id}`}
              onClick={() => {
                setAnchorElSearchDropdown(null);
              }}
            >
              <IconButton
                disableRipple
                aria-label="search"
              >
                <SearchIcon />
                <ListAltIcon />
                <Typography style={{ paddingLeft: "6px" }}>
                  Combo Sets
                </Typography>
              </IconButton>
            </Link>
          </MenuItem>
        </div>
      </Menu>
    )
  }

  function renderLargeCharacterImg() {
    return (
      <Fade in={true} timeout={1000} style={{}}>
        <Stack direction="row">
          <div>
            {characterContext.characterData.id ?
              <FadeOnLoadImage
                style={{ width: "auto", height: "100%", objectFit: "cover", backgroundColor: characterContext.characterData.darkColor }}
                alt="character portrait"
                src={require(`../../${rootPath}/images/${characterContext.characterData.id}-wide.png`)}
              /> : null}
          </div>
          <div style={{ height: "auto", backgroundColor: characterContext.characterData.darkerColor, width: "100%" }} />
        </Stack>
      </Fade>
    )
  }

  function renderFullSizeHeader() {
    return (
      <Stack direction="row">
        <Stack direction="column" spacing={1} style={{ marginRight: "4px", flexGrow: 1 }} >
          <Slide in={true} timeout={400} style={{ flexGrow: 1, boxSizing: "border-box" }}>
            <Stack justifyContent="end" sx={{ backgroundColor: characterContext.characterData.color }}>
              <Typography
                align="left"
                variant="h1"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "55px",
                  fontWeight: "bold",
                  lineHeight: "80%",
                  textOverflow: "ellipsis",
                  width: "300px"

                }}
                style={{
                  verticalAlign: "bottom",
                  padding: "16px",
                }}
              >
                {characterContext.characterData.name.toUpperCase() + " " + entity}
              </Typography>
              <Slide in={true} direction="right" timeout={400} >
                <Stack sx={{ marginBottom: "8px" }}>
                  <ChevronChain
                    primaryColor={characterContext.characterData.darkColor}
                    secondaryColor={characterContext.characterData?.darkColor}
                    height={38}
                    content={getCharacterNav()}
                    forceChevronOnSingleItem
                  />
                </Stack>
              </Slide>
            </Stack>
          </Slide>



        </Stack>

        {renderLargeCharacterImg()}
      </Stack >
    )
  }

  function renderSmallHeader() {
    return (
      <Slide in={true} timeout={400}>
        <Stack direction="row" alignItems="center" justifyContent="space-between"
          style={{
            backgroundColor: characterContext.characterData.color,
            position: "relative",
            boxSizing: "border-box"
          }}>
          {characterContext.characterData.id ?
            <Stack style={{ position: "relative", padding: 0, margin: 0 }}>
              <FadeOnLoadImage
                alt="character portrait"
                style={{ height: "40px", width: "40px", objectFit: "cover", zIndex: 5, position: "relative" }}
                src={require(`../../${rootPath}/images/${characterContext.characterData.id}-chip-icon.png`)}
              />
            </Stack> : null}
          <Typography
            align="left"
            variant="h1"
            sx={{
              color: theme.palette.text.primary,
              fontSize: "20px",
              fontWeight: "bold",
              px: 1,
              overflow: "hidden",
              textWrap: "noWrap",
              textOverflow: "ellipsis"
            }}
            style={{
              verticalAlign: "middle",
            }}
          >
            {characterContext.characterData.name.toUpperCase() + " " + entity}
          </Typography>

          <ChevronChain
            primaryColor={characterContext.characterData?.color}
            secondaryColor={characterContext.characterData.darkerColor}
            height={40}
            content={getCharacterNav()}
            noWrap
          />
        </Stack>
      </Slide>
    )
  }

  return (
    <Link
      to={redirectOverride ?? window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))}
      style={{ cursor: "pointer", textDecoration: "none", width: "100%", position: "relative", boxSizing: "border-box", overflow: "hidden", marginBottom: "25px" }} >
      {medScreenSize ? renderFullSizeHeader() : renderSmallHeader()}
      {renderMenu()}
    </Link>
  );
}
