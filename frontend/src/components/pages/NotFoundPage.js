import {
  Card,
  Typography
} from "@mui/material";
import "firebaseui/dist/firebaseui.css";
import { useEffect } from "react";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function NotFoundPage() {

  useEffect(() => {
    document.title = `Not Found`;
  }, []);

  return (
    <GutterBackground
      leftText="MISSING"
      rightText="NOT FOUND"
      color={gameData.color}
    >
      <div style={{ margin: "auto" }}>
        <div style={{ margin: "auto" }}>
          <Card
            sx={{ p: 3 }}
            style={{
              maxWidth: "400px",
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
                404
              </Typography>
            </div>
            <Typography>This page does not exist</Typography>
          </Card>
        </div>
      </div>
    </GutterBackground>
  );
}
