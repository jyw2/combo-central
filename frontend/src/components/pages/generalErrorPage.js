import {
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import "firebaseui/dist/firebaseui.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function GeneralErrorPage() {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <GutterBackground leftText="ERROR" rightText="ERROR" color={gameData.color}>
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
                ERROR
              </Typography>
            </div>
            <Stack spacing={1}>
              <Typography>Error occured, please try reloading</Typography>

              <Button onClick={() => {
                navigate(0)
              }} variant="contained">
                Reload
              </Button>
            </Stack>
          </Card>
        </div>
      </div>
    </GutterBackground>
  );
}
