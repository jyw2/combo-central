import {
  Card,
  Fade,
  Stack,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact`;
  }, []);

  return (
    <GutterBackground leftText="CONTACT" rightText="CONTACT" color={gameData.color}>
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
              }}
            >
              <div style={{ height: "40px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "10vw", md: "90px" },
                    top: { xs: "-8vw", md: "-70px" }
                  }}
                  style={{
                    position: "absolute",
                    fontWeight: "bold",
                    left: "15px",
                  }}
                >
                  CONTACT
                </Typography>
              </div>
              <Stack spacing={1} style={{ paddingBottom: "40px" }}>
                <Typography>
                  For business and admin inquiries shoot us an email at <Typography style={{ fontWeight: "bold" }}>combo.central.contact@gmail.com</Typography>
                </Typography>
              </Stack>
            </Card>
          </Fade>
        </div>
      </div>
    </GutterBackground>
  );
}
