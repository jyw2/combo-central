import {
  Card,
  Typography
} from "@mui/material";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function UnauthorizedPage() {
  useEffect(() => {
    document.title = `Forbidden`;
  }, []);


  return (
    <GutterBackground
      leftText="YOU SHOULDNT BE HERE"
      rightText="UNAUTHORIZED"
      color={gameData.color}
    >
      <div style={{ margin: "auto" }}>
        <div style={{ margin: "auto" }}>
          <Card
            sx={{ p: 3 }}
            style={{
              width: "400px",
              margin: "auto",
              marginTop: "10vh",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div style={{ height: "40px" }}>
              <Typography
                style={{
                  fontSize: "90px",
                  position: "absolute",
                  fontWeight: "bold",
                  top: "-70px",
                  left: "15px",
                }}
              >
                403
              </Typography>
            </div>
            <Typography>Lacking permissions! Logging in may help</Typography>
          </Card>
        </div>
      </div>
    </GutterBackground>
  );
}
