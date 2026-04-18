import { useTheme } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  CardContent,
  Fade,
  Slide,
  Stack,
  Typography
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Chevron from "components/shared/chevron.js";
import { CharacterContext } from "context/characterContext.js";
import { UserContext } from "context/userContext.js";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gameData, rootPath } from "../../util/envResolverUtilEs6.js";
import GutterBackground from "../shared/gutterBackground.js";
import FadeOnLoadImage from "components/shared/fadeOnLoadImage.js";
import FooterAd from "components/footerAd.js";

export default function HomePage(props) {
  const color = gameData.color;
  const theme = useTheme();
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    document.title = `Combo Central`;
  }, []);

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(gameData.defaultCharacterData)
  }, [])

  function renderLinkChevron(title, subtitle, link, variant, icon) {
    return <Fade in={true} timeout={500 + variant * 300} >
      <Link style={{ textDecoration: "none" }} to={link} >
        <div style={{ position: "relative" }} className="shift-right-on-hover">
          {/* <div style={{ transform: `scale(${largeScreenSize ? 7 : 2.5})`, position: "absolute", top: largeScreenSize ? "40px" : "0px", left: "-30px", color: theme.palette.secondary.main }}>
            {icon}
          </div> */}

          <Chevron
            max={-1}
            index={variant}
            height={largeScreenSize ? 112 : 80}
            grow={1}
            primaryColor={props.primaryColor}
            secondaryColor={color}
            notCenter
            clickcallback={() => { }}
            imageBG={<FadeOnLoadImage src={require(`../../${rootPath}/images/banner-${variant}.png`)} style={{ width: "100%", }} />}
          >
            <Stack alignItems="start" sx={{ marginTop: { xs: "-2.4vw", xs: "-14px", md: "-18px" }, marginLeft: largeScreenSize ? "-14px" : "2%", width: largeScreenSize ? null : "75vw" }}>
              <Stack direction="row" alignItems="center" spacing={largeScreenSize ? 2 : 1} style={{
                // backgroundColor: "black"
              }}>
                <div style={{ transform: `scale(${largeScreenSize ? 2.4 : 1.5})`, color: theme.palette.text.primary, marginTop: "5px" }}> {icon} </div>
                <Typography
                  letterSpacing={-2}
                  sx={{ fontSize: { xs: "6vw", sm: "30px", md: "40px" } }}
                  style={{
                    color: theme.palette.text.primary,
                    overflow: "visible",
                    fontWeight: "bold",
                    whiteSpace: "noWrap",
                  }}
                  textAlign="start"
                >
                  {title}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  whiteSpace: { xs: "", md: "noWrap" },
                }}
                style={{
                  color: theme.palette.text.veryDark,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: "-6px",
                  marginLeft: "-8px",
                  whiteSpace: "noWrap",
                  width: "80%"
                }}
                textAlign="start"
              >
                {subtitle}
              </Typography>
            </Stack>
          </Chevron>
        </div>
      </Link>
    </Fade >
  }

  return (
    <GutterBackground
      leftText="HOME"
      rightText="COMBO CENTRAL"
      color={color}
    >
      <Stack
        alignItems="center"
        style={{}}
        sx={{ flexGrow: 1, m: "auto", pb: 10 }}
        spacing={1}
      >
        <Stack
          style={{
            width: largeScreenSize ? "700px" : "90vw",
            backgroundColor: theme.palette.background.paper,
            height: largeScreenSize ? "110px" : "110px",
          }} />

        <Stack>
          <Slide in={true} timeout={500} >
            <Stack spacing={1} direction="column" alignItems="right" justifyContent="start" >
              <Typography
                letterSpacing={{ xs: -5, md: -15 }}
                sx={{ fontSize: { xs: "13vw", sm: "10vw", md: "130px" }, whiteSpace: { sx: "", md: "noWrap" } }}
                style={{
                  color: theme.palette.text.primary,
                  overflow: "visible",
                  fontWeight: "bold",
                  marginTop: "-120px",

                }}
              >
                COMBO CENTRAL
              </Typography>
              <Stack sx={{ mt: { xs: "-25px", md: "-40px" } }}>
                <Typography
                  sx={{ mt: { xs: "-25px", md: "-40px" } }}
                  letterSpacing={2}
                  style={{
                    color: theme.palette.text.primary,
                    overflow: "visible",
                    fontSize: "13px",
                  }}
                >
                  CREATE AND SHARE COMBOS
                </Typography>
              </Stack>
            </Stack>
          </Slide>
        </Stack>

        <Stack
          sx={{ width: { xs: "90vw", md: "700px" }, pt: { xs: "-15px", md: "10px" } }}
          style={{
            // backgroundColor: theme.palette.background.paper,
            overflow: "visible",
            position: "relative",
            // paddingLeft: largeScreenSize ? "80px" : "0"
          }}>
          <CardContent>
            <Stack spacing={{ xs: 3, md: 4 }} style={{ paddingLeft: largeScreenSize ? "70px" : "5vw", marginRight: largeScreenSize ? "" : "-5vw" }}>
              {renderLinkChevron("SEARCH COMBOS", "Find the perfect combo for any situation", "/combo/search", 0, <KeyboardDoubleArrowRightIcon />)}
              {renderLinkChevron("SEARCH COMBO SETS", "Master a new character with a curated collection of combos", "/combo-set/search", 1, <ListAltIcon />)}
              {renderLinkChevron("CREATE", "Share your combos with the world", "/combo/create", 2, <AddIcon />)}
              {renderLinkChevron("ACCOUNT / LOGIN", "Keep track of all your favorite combos and combo sets",
                userContext.userManager?.isLoggedIn()
                  ? `/user/${userContext.userManager?.getId()}`
                  : "/login", 3, <PersonOutlineIcon />)}

            </Stack>
          </CardContent>

          <Stack sx={{marginTop:5}}>
            <FooterAd />

          </Stack>
        </Stack>
      </Stack>
    </GutterBackground>
  );
}
