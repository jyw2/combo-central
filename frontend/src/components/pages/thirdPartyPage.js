import {
  Card,
  Fade,
  Stack,
  Typography
} from "@mui/material";
import {  useEffect, useState } from "react";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";
import markdownPath from '../../legal/thirdPartyLicenses.md'
import ReactMarkdown from 'react-markdown'

export default function ThirdPartyLicensesPage() {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch(markdownPath).then((response) => response.text()).then((text) => {
      setMarkdown(text)
    })
  }, []);

  useEffect(() => {
    document.title = `Third party licenses and acknowledgements`;
  }, []);

  return (
    <GutterBackground leftText="THIRD PARTY" rightText="LICENSES" color={gameData.color}>
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
                  THIRD PARTY
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