import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { CircularProgress, Fade, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ChevronChainContentWrapper from "components/shared/chevronChainContentWrapper";
import { ToastContext } from "context/toastContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import HttpClient from "../../services/httpClient";
import ChevronChain from "../shared/chevronChain";
import ComboSetDropDown from "./comboSetDropDown";


export default function ViewComboActionsBar({
  combo,
  setCombo,
  secondaryColor,
  primaryColor,
  charId,
  grow,
}) {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const toastContent = useContext(ToastContext)
  const [canEdit, setCanEdit] = useState(false);

  const theme = useTheme();
  const [favorited, setFavorited] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [likeCoolDown, setLikeCooldown] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null);
  const openComboSets = Boolean(anchorEl);
  const handleComboSetsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleComboSetsClose = () => {
    setAnchorEl(null);
  };

  async function toggleFavorite() {
    if (!combo?._id || likeCoolDown) return;
    setLikeCooldown(true)
    setTimeout(() => setLikeCooldown(false), 300)

    const favoritedTemp = favorited;

    setFavorited(null);
    try {
      await HttpClient.setUserLike(
        userContext.userManager.getId(),
        charId,
        await userContext.userManager.getToken(),
        combo?._id,
        !favoritedTemp
      );
      setFavorited(!favoritedTemp);

      if (!favoritedTemp) {
        toastContent.setToastContent("Liked combo")
        setCombo({ ...combo, likes: (combo?.likes ?? 0) + 1 });
      } else {
        toastContent.setToastContent("Unliked combo")
        setCombo({ ...combo, likes: (combo?.likes ?? 0) - 1 });
      }
    } catch (e) {
      setFavorited(favoritedTemp);
    }
  }

  async function fetchLikes(comboId) {
    const userLikes = await HttpClient.getUserLikes(
      userContext.userManager.getId(),
      charId,
      await userContext.userManager.getToken()
    );
    if (!userLikes) return
    setFavorited(userLikes.some((c) => c === comboId));
  }

  useEffect(() => {
    if (!userContext.isLoadingUser && combo) {
      if (userContext.userManager.isLoggedIn()) {
        if (combo?.ownerId && combo.ownerId === userContext.userManager.getId()) {
          setCanEdit(true);
        }
      }

      if (combo?._id) {
        fetchLikes(combo?._id);
      }
    }
  }, [userContext.isLoadingUser, combo]);

  const spinner = (
    <CircularProgress
      size={"18px"}
      style={{
        color: theme.palette.text.primary,
      }}
    />
  );

  const loadingLoggedInLikes = !combo || favorited === null || likeCoolDown

  const content = userContext.userManager.isLoggedIn() ?
    [
      <ChevronChainContentWrapper clickcallback={toggleFavorite}>
        <IconButton
          disableRipple
          disabled={loadingLoggedInLikes}
        >
          {!loadingLoggedInLikes ? <Fade in={!loadingLoggedInLikes}>
            <Stack direction="row" alignItems="center">
              {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}

              <Typography sx={{ ml: 1 }} style={{ fontSize: "14px" }}>
                {combo?.likes ?? 0}
              </Typography>
            </Stack>
          </Fade> : spinner}
        </IconButton>
      </ChevronChainContentWrapper>
      ,
      <ChevronChainContentWrapper clickcallback={(e) => { handleComboSetsClick(e) }}>
        <IconButton
          disableRipple
        >
          <PlaylistAddIcon />
        </IconButton>
      </ChevronChainContentWrapper>
    ]
    :
    [
      <ChevronChainContentWrapper clickcallback={() => { navigate("/login") }}>
        <IconButton
          disableRipple
        >
          {combo ? <Fade in={combo}>
            <Stack direction="row" alignItems="center">
              <FavoriteIcon />

              <Typography sx={{ ml: 1 }} style={{ fontSize: "14px" }}>
                {combo?.likes ?? 0}
              </Typography>
            </Stack >
          </Fade> : spinner}
        </IconButton>
      </ChevronChainContentWrapper>
      ,
      <ChevronChainContentWrapper clickcallback={() => { navigate("/login") }}>
        <IconButton
          disableRipple
        >
          <PlaylistAddIcon />
        </IconButton>
      </ChevronChainContentWrapper>
    ];

  if (canEdit) {
    content.push(
      <ChevronChainContentWrapper url={`/combo/edit/update/${charId}/${combo?._id}`}>
        <IconButton
          disableRipple
        >
          <EditIcon />
        </IconButton>
      </ChevronChainContentWrapper>
    );
  }
  return (
    <div style={{ width: "250px"}}>
      <ChevronChain
        secondaryColor={secondaryColor}
        primaryColor={primaryColor}
        height={40}
        noWrap
        content={content}
        grow
      />

      <ComboSetDropDown
        setAnchorEl={setAnchorEl}
        comboId={combo?._id}
        closeCallback={handleComboSetsClose}
        open={openComboSets}
        charId={charId}
        anchorEl={anchorEl}
      />
    </div>
  );
}
