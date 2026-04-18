import { useTheme } from "@emotion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Fade,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  Typography
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import "firebaseui/dist/firebaseui.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { characterData } from "../../util/envResolverUtilEs6";
import HttpClient from "../../services/httpClient";
import CharDirectoryCard from "../shared/charDirectoryCard";
import CharacterHeader from "../shared/characterHeader";
import ComboSearchCard from "../shared/comboSearchCard";
import GutterBackground from "../shared/gutterBackground";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChevronChain from "components/shared/chevronChain";
import ComboSetSearchCard from "components/shared/comboSetSearch/comboSetSearchCard";
import { CharacterContext } from "../../context/characterContext";
import FooterAd from "components/footerAd";

export default function UserPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const { userId, entity, charId } = useParams();
  const theme = useTheme();
  const [userData, setUserData] = useState(null);
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('lg'))
  const largerThanSmall = useMediaQuery(theme.breakpoints.up('sm'))

  function isUsersProfile() {
    return userContext.userManager.getId() === userId;
  }

  useEffect(() => {
    async function fetchAndInit() {
      const { data, status } = await HttpClient.getUser(userId);
      if (status !== 200) {
        navigate("/404", { replace: true })
      }
      setUserData(data);
      document.title = `${data?.username ?? "user"}'s profile`;
    }
    fetchAndInit();
  }, []);

  function getTitle() {
    switch (entity) {
      case "combos":
        return "COMBOS";
      case "combosets":
        return "SETS";
      case "likes":
        return "LIKES";
      case "combo-likes":
        return "CLIKES";
      case "combo-set-likes":
        return "CSLIKES";
      default:
        return "PROFILE";
    }
  }

  function renderLists() {
    if (entity === "likes") {
      return (
        <Card sx={{ p: 2, width: "100%", boxSizing: "border-box" }}>
          <Stack spacing={2} direction={largeScreenSize ? "row" : "column"}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(`/user/${userId}/combo-likes/${charId}`)}
            >
              <KeyboardDoubleArrowRightIcon sx={{ mr: 1 }} /> Liked Combos
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                navigate(`/user/${userId}/combo-set-likes/${charId}`)
              }
            >
              <ListAltIcon sx={{ mr: 1 }} />
              Liked Combo sets
            </Button>
          </Stack>
        </Card>
      );
    } else if (entity === "combosets" || entity === "combo-set-likes") {
      return (
        <ComboSetSearchCard
          userId={userId}
          comboPrefix={`${isUsersProfile() ? "MY " : ""} ${entity === "combo-set-likes" ? "LIKED" : ""}`}
          likesOnly={entity === "combo-set-likes"}
        />
      );
    } else {
      return (
        <ComboSearchCard
          key={entity}
          userId={userId}
          comboPrefix={`${isUsersProfile() ? "MY " : ""} ${entity === "combo-likes" ? "LIKED" : ""}`}
          likesOnly={entity === "combo-likes"}
        />
      );
    }
  }

  function getUserActionBarContent() {
    return [
      <IconButton url={
        characterContext.characterData?.id ?
          `/user/${userId}/combos/${characterContext.characterData?.id}`
          : `/user/${userId}/combos`}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>,
      <IconButton url={
        characterContext.characterData?.id ?
          `/user/${userId}/likes/${characterContext.characterData?.id}`
          : `/user/${userId}/likes`}>
        <FavoriteIcon />
      </IconButton>,
      <IconButton url={
        characterContext.characterData?.id ?
          `/user/${userId}/combosets/${characterContext.characterData?.id}`
          : `/user/${userId}/combosets`
      }>
        <ListAltIcon />
      </IconButton>
    ]
  }

  function renderUserHeader() {
    return (
      <Stack
        sx={{ width: "100%" }}
        direction="row" alignItems="center" justifyContent="space-between"
        style={{
          padding: "0px",
          backgroundColor: characterContext.characterData.color,
          boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 8px",
          position: "relative",
          zIndex: 100
        }}
      >
        <Typography
          align="left"
          variant="h1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: "20px", lg: "55px" },
            fontWeight: "bold",
            px: 2
          }}
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            verticalAlign: "middle",
            overflow: "hidden",
            textWrap: "noWrap",
            textOverflow: "ellipsis"
          }}
        >
          {userData.username.toUpperCase()}
        </Typography>
        <ChevronChain
          secondaryColor={theme.palette.anchor.dark}
          primaryColor={characterContext.characterData.color}
          height={40}
          content={getUserActionBarContent()}
          noWrap
        />
      </Stack>
    )
  }

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])

  function renderEntityCol() {
    return (<Stack
      style={{
        margin: 0,
        maxWidth: "900px",
      }}
      alignItems="center"
      spacing={2}
    >
      <Stack
        style={{
          marginRight: 0,
          position: "relative",
          overflow: "hidden",
          width: "100%"
        }}
        alignItems="center"
      >
        {!charId ? (
          <Stack sx={{ p: { xs: 2, lg: 0 } }}>
            <Stack direction="row">
              <Typography
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: theme.palette.text.dark,
                  textAlign: "left",
                  marginBottom: "-30px",
                  marginTop: "40px",
                  maxWidth: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                variant="h5"
              >
                {isUsersProfile() ? "MY " : `${userData.username}`}
              </Typography>
              {isUsersProfile() ? null :
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: theme.palette.text.dark,
                    textAlign: "left",
                    marginBottom: "-30px",
                    marginTop: "40px",
                  }}
                  variant="h5" >'s</Typography>}
            </Stack>
            <Slide
              in={true}
              direction="right"
              timeout={500}
              key={getTitle()}
            >
              <Typography
                style={{
                  fontSize: largerThanSmall ? "90px" : "70px",
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  textAlign: "left",
                  marginBottom: "-90px",
                }}
              >
                {getTitle()}
              </Typography>
            </Slide>

            <CharDirectoryCard
              key={entity}
              url={`/user/${userId}/${entity}`}
            ></CharDirectoryCard>
          </Stack>
        ) : (
          <Stack sx={{ width: { xs: "95vw", md: "100%" }, margin: "auto", pt: { xs: 2, md: 0 } }} alignItems="center" >
            <Stack sx={{ zIndex: 0, mb: { xs: 2, lg: 0 }, width: "100%" }} alignItems="center" >
              <CharacterHeader
                entity={entity === "combo-set-likes" || entity === "combosets" ? "COMBO SETS" : `COMBOS`}
                userScoped={userId}
                padded={!largeScreenSize}
              ></CharacterHeader>
            </Stack>

            {renderLists()}
          </Stack>
        )}
      </Stack>
      <FooterAd/>
    </Stack  >)
  }

  return (
    <GutterBackground
      leftText={getTitle()}
      rightText={userId}
      color={characterContext.characterData.color}
    >
      {!userData ? (
        <CircularProgress sx={{ m: "auto", my: 5 }} />
      ) :
        <Fade in={!!userData}>
          <Stack>
            {largeScreenSize ? (
              <Stack
                direction="row"
                style={{ marginBottom: "10vh" }}
                justifyContent="center"
                spacing={2}
                position="relative"
              >
                <Stack
                  justifyContent="start"
                  sx={{
                    marginRight: "30px",
                  }}
                  spacing={2}
                >
                  <Card
                    style={{
                      width: "200px",
                      marginLeft: "0",
                      position: "sticky",
                      paddingTop: "100px",
                      borderRadius: "2px",
                      paddingBottom: "30px"
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: "bold",
                        padding: "15px",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {userData.username.toUpperCase()}
                    </Typography>
                    <Divider></Divider>
                    <Link to={characterContext.characterData?.id ?
                      `/user/${userId}/combos/${characterContext.characterData?.id}`
                      : `/user/${userId}/combos`} style={{ textDecoration: "none" }}>
                      <ListItemButton
                        style={{
                          backgroundColor: entity === "combos" ? characterContext.characterData.color : "",
                        }}
                      >
                        <ListItemIcon>
                          <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                        </ListItemIcon>
                        <ListItemText style={{ color: theme.palette.text.primary }}>Combos</ListItemText>
                      </ListItemButton>
                    </Link>

                    <Link
                      to={characterContext.characterData?.id ?
                        `/user/${userId}/likes/${characterContext.characterData?.id}`
                        : `/user/${userId}/likes`} style={{ textDecoration: "none" }}>
                      <ListItemButton
                        style={{
                          backgroundColor:
                            entity === "likes" ||
                              entity === "combo-likes" ||
                              entity === "combo-set-likes"
                              ? characterContext.characterData.color
                              : "",
                        }}
                      >
                        <ListItemIcon>
                          <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText style={{ color: theme.palette.text.primary }}>Likes</ListItemText>
                      </ListItemButton>
                    </Link>

                    <Link to={characterContext.characterData?.id ?
                      `/user/${userId}/combosets/${characterContext.characterData?.id}`
                      : `/user/${userId}/combosets`} style={{ textDecoration: "none" }}>
                      <ListItemButton
                        style={{
                          backgroundColor: entity === "combosets" ? characterContext.characterData.color : "",
                        }}
                      >
                        <ListItemIcon>
                          <ListAltIcon></ListAltIcon>
                        </ListItemIcon>
                        <ListItemText style={{ color: theme.palette.text.primary }}>Combo sets</ListItemText>
                      </ListItemButton>
                    </Link>
                  </Card>
                  <FooterAd />
                </Stack>
                {renderEntityCol()}
              </Stack>
            ) : (
              <Stack sx={{ mb: 4 }} alignItems="center" >
                {renderUserHeader()}
                {renderEntityCol()}
              </Stack>
            )}
          </Stack>
        </Fade>}
    </GutterBackground >
  );
}
