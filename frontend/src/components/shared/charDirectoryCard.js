import { useTheme } from "@emotion/react";
import {
  Fade,
  Stack,
  Typography
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from "react-router-dom";
import { characterData, gameData } from "../../util/envResolverUtilEs6.js";
import "../../styles/cssAnimations.css";
import FadeOnLoadImage from "./fadeOnLoadImage.js";
import { sortBy } from "lodash"
import { rootPath } from "../../util/envResolverUtilEs6"

export default function CharDirectoryCard(props) {
  const color = gameData.color;
  const theme = useTheme();
  const navigate = useNavigate();
  const { url, title } = props;
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Stack
      style={{
        marginTop: "70px",
        position: "relative",
        width: largeScreenSize ? "800px" : "100%",
        maxWidth: "960px",
        paddingTop: "20px",
        paddingLeft:"5px",
        paddingRight:"5px",
        paddingBottom: "30px",
        boxSizing: "border-box",
        backgroundColor: theme.palette.background.paper,
      }}
      alignItems="center"
    >
      {/* <div
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translate(-50%, 0)",
          margin: "auto",
          width: largeScreenSize ? "800px" : "100%",
          backgroundColor: theme.palette.background.paper,
          height: "100%",
        }}
      ></div> */}
      <Fade in={true} timeout={1000} key={title}>
        <Stack direction="row"justifyContent="center" style={{ flexWrap: "wrap", flexGrow: 0, margin: "auto" }}>
          {(Object.values(characterData) ? sortBy(Object.values(characterData), (c) => c.name) : []).map((charData) => (
            <Link
              to={`${url}/${charData.id}`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              key={charData.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  position: "relative",
                  margin: "0",
                  cursor: "pointer",
                  margin: "2px 2px",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    width: "90px",
                    height: "80px",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <FadeOnLoadImage
                    style={{
                      width: "80px",
                      objectFit: "cover",
                      backgroundColor: charData?.color,
                    }}
                    alt="character portrait"
                    src={require(`../../${rootPath}/images/${charData.id}-wide.png`)}
                    className="scale-on-hover-zoomed"
                  />
                </div>

                <div
                  style={{
                    backgroundColor: charData?.darkColor,
                    padding: "2px 0px",
                  }}
                >
                  <Typography
                    style={{
                      color: theme.palette.text.primary,
                      fontWeight: "bold",
                      fontSize:"11px"
                    }}
                  >
                    {charData?.name?.toUpperCase().split(" ")[0]}
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </Stack>
      </Fade>
    </Stack>
  );
}
