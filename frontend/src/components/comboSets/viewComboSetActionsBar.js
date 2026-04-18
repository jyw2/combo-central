import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HttpClient from "../../services/httpClient";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CircularProgress, IconButton, Fade } from "@mui/material";
import { CharacterContext } from "../../context/characterContext";
import ChevronChain from "../shared/chevronChain";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import ChevronChainContentWrapper from "components/shared/chevronChainContentWrapper";
import { ToastContext } from "context/toastContext";

export default function ViewComboSetActionsBar({
  comboSet,
  setComboSet,
  secondaryColor,
  charId,
}) {
  const [canEdit, setCanEdit] = useState(false);
  const [favorited, setFavorited] = useState(null);
  const [likeCoolDown, setLikeCooldown] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  
  const characterContext = useContext(CharacterContext)
  const userContext = useContext(UserContext);
  const toastContent = useContext(ToastContext)

  const theme = useTheme();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const openComboSets = Boolean(anchorEl);

  const handleComboSetsClick = (event) => {
    setSearchParams(new URLSearchParams());
    setAnchorEl(event.currentTarget);
  };
  const handleComboSetsClose = () => {
    setAnchorEl(null);
  };

  async function toggleFavorite() {
    if (!comboSet?._id || likeCoolDown) return;
    setLikeCooldown(true)
    setTimeout(() => setLikeCooldown(false), 300)
    const favoritedTemp = favorited;

    setFavorited(null);
    try {
      await HttpClient.setUserSetLike(
        userContext.userManager.getId(),
        charId,
        await userContext.userManager.getToken(),
        comboSet?._id,
        !favoritedTemp
      );
      setFavorited(!favoritedTemp);

      if (!favoritedTemp) {
        toastContent.setToastContent("Liked combo set")
        setComboSet({ ...comboSet, likes: (comboSet?.likes ?? 0) + 1 });
      } else {
        toastContent.setToastContent("Unliked combo set")
        setComboSet({ ...comboSet, likes: (comboSet?.likes ?? 0) - 1 });
      }
    } catch (e) {
      setFavorited(favoritedTemp);
    }
  }

  async function fetchLikes(comboSetId) {
    const userLikes = await HttpClient.getUserSetLikes(
      userContext.userManager.getId(),
      charId,
      await userContext.userManager.getToken()
    );
    setFavorited(userLikes.some((c) => c === comboSetId));
  }

  useEffect(() => {
    if (!userContext.isLoadingUser && comboSet) {
      if (
        comboSet?.ownerId &&
        comboSet.ownerId === userContext.userManager.getId()
      ) {
        setCanEdit(true);
      }

      if (comboSet?._id) {
        fetchLikes(comboSet?._id);
      }
    }
  }, [userContext.isLoadingUser, comboSet]);

  const spinner = (
    <CircularProgress
      size="15px"
      style={{
        color: theme.palette.text.primary,
      }}
    />
  );
  const loggedIn = userContext?.userManager?.isLoggedIn() && !userContext?.userManager?.isLoadingUser
  const isLoadingLikesLoggedIn = !comboSet || favorited === null || likeCoolDown
  const content = loggedIn ? [
    <ChevronChainContentWrapper clickcallback={toggleFavorite}>
      <IconButton
        disableRipple
        disabled={isLoadingLikesLoggedIn}
      >
        {isLoadingLikesLoggedIn ? spinner :
          <Fade in={!isLoadingLikesLoggedIn}>
            <Stack direction="row" alignItems="center">
              {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}

              <Typography sx={{ ml: 1 }} style={{ fontSize: "14px" }}>
                {comboSet?.likes ?? 0}
              </Typography>
            </Stack>
          </Fade>}
      </IconButton>
    </ChevronChainContentWrapper>
    ,
  ] : [
    <ChevronChainContentWrapper clickcallback={() => navigate("/login")}>
      <IconButton
        disableRipple
      >
        {!comboSet ? spinner :
          <Fade in={comboSet}>
            <Stack direction="row" alignItems="center">
              <FavoriteIcon />
              <Typography sx={{ ml: 1 }} style={{ fontSize: "14px" }}>
                {comboSet?.likes ?? 0}
              </Typography>
            </Stack>
          </Fade>}
      </IconButton>
    </ChevronChainContentWrapper>
    ,
  ];

  if (canEdit) {
    content.push(
      <ChevronChainContentWrapper clickcallback={() => {
        navigate(`/combo-set/edit/update/${charId}/${comboSet?._id}`, {
          relative: "path",
        });
      }}>
        <IconButton

          disableRipple
        >
          <EditIcon />
        </IconButton>
      </ChevronChainContentWrapper>
    );
  }
  return (
    <div style={{ width: "250px" }}>
      <ChevronChain
        primaryColor={characterContext.characterData.darkerColor}
        secondaryColor={secondaryColor}
        height={40}
        noWrap
        content={content}
        grow
      />
    </div>
  );
}
