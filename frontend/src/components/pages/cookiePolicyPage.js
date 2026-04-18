import {
  Card,
  Fade,
  Stack,
  Typography
} from "@mui/material";
import {  useEffect, useState } from "react";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";
import cookieMarkdownPath from '../../legal/cookiePolicy.md'
import ReactMarkdown from 'react-markdown'

export default function CookiePolicyPage() {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch(cookieMarkdownPath).then((response) => response.text()).then((text) => {
      setMarkdown(text)
    })
  }, []);

  useEffect(() => {
    document.title = `Cookie Policy`;
  }, []);

  return (
    <GutterBackground leftText="COOKIES" rightText="COOKIES" color={gameData.color}>
      <div style={{ margin: "auto" }}>
        <div style={{ margin: "auto" }}>
          <Fade in={true} timeout={500}>

            <Card
              sx={{ p: 3 }}
              style={{
                maxWidth: "800px",
                margin: "auto",
                marginTop: "10vh",
                position: "relative",
                overflow: "visible",
                marginBottom: "10vh"
              }}
            >
              <Stack sx={{ height: {xs: "0px", md:"40px" }}}>
                <Typography
                  sx={{
                    fontSize: { xs: "10vw", md: "90px" },
                    top: { xs: "-8vw", md: "-70px" }
                  }}
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                    left: "15px",
                    textWrap: "noWrap"
                  }}
                >
                  COOKIE POLICY
                </Typography>
              </Stack>
              <Stack spacing={1} style={{ textAlign: "left" }}>
                <ReactMarkdown children={markdown} />
              </Stack>
            </Card>
          </Fade>
        </div>
      </div>
    </GutterBackground>
  );
}