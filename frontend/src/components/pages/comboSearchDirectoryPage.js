import { useTheme } from "@emotion/react";
import {
  Slide,
  Stack,
  Typography
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameData } from "../../util/envResolverUtilEs6.js";
import CharDirectoryCard from "../shared/charDirectoryCard.js";
import GutterBackground from "../shared/gutterBackground.js";
import FooterAd from "components/footerAd.js";

export default function CharDirectoryPage(props) {
  const color = gameData.color;
  const theme = useTheme();
  const navigate = useNavigate();
  const { url, title, gutterText, invert, entityName } = props;
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    document.title = `Combo Search`;
  }, []);

  return (
    <GutterBackground
      leftText="CHOOSE YOUR CHARACTER"
      rightText={gutterText}
      color={color}
      invert={invert}
      key={gutterText}
    >
      <Stack
        alignItems="center"
        style={{}}
        sx={{
          flexGrow: 1, m: "auto", pb: 10,
          width: largeScreenSize ? "1000px" : "80vw",
          marginBottom: "10vh"
        }}
        spacing={1}
      >
        <Stack
          style={{
            backgroundColor: theme.palette.background.paper,
            width: largeScreenSize ? "800px" : "100%",
            height: "160px",
          }}
        >
          <Slide in={true} timeout={500} key={title}>
            <Stack direction="row" alignItems="end" style={{ margin: "auto" }}>
              <Stack spacing={1} direction="column" alignItems="right" justifyContent="start">

                <Typography
                  letterSpacing={1}
                  sx={{ marginBottom: { xs: "-50px", sm: "-50px", md: "-70px" } }}

                  style={{
                    marginTop: "20px",

                    color: theme.palette.text.primary,
                    overflow: "visible",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginRight: "10px",
                    textAlign: "left"
                  }}
                >
                  {entityName}
                </Typography>
                <Typography
                  letterSpacing={largeScreenSize ? -13 : -6}
                  sx={{ fontSize: { xs: "80px", sm: "100px", md: "150px" } }}
                  style={{
                    color: theme.palette.text.primary,
                    overflow: "visible",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {title}
                </Typography>

              </Stack>

              <div
                style={{ position: "relative", height: "0px", width: "0px" }}
              >
                <Typography
                  letterSpacing={largeScreenSize ? -3 : -1}
                  style={{
                    transformOrigin: "bottom left",
                    color: theme.palette.text.primary,
                    position: "absolute",
                    bottom: largeScreenSize ? "40px" : "22px",
                    left: largeScreenSize ? "15px" : "",
                    fontSize: largeScreenSize ? "40px" : "20px",
                    fontWeight: "bold",
                  }}
                >
                  FOR
                </Typography>
              </div>
            </Stack>
          </Slide>
        </Stack>
        <CharDirectoryCard url={url} title={title}></CharDirectoryCard>
        <div style={{
          paddingTop: largeScreenSize ? "20px" : "", width: largeScreenSize ? "800px" : "100%",
        }}>
          <FooterAd />
        </div>

      </Stack >
    </GutterBackground >
  );
}
