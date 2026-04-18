import {
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { FirebaseUserManager, UserContext } from "../../context/userContext";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";


export default function LoadingLoggedInUserErrorPage() {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <GutterBackground leftText="LOADING" rightText="ERROR" color={gameData.color}>
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
              <Typography>Error occured while verifying your account</Typography>

              <Button onClick={() => {
                signOut(auth).then(() => {
                  userContext.setUserManager(new FirebaseUserManager(null, null));
                  navigate("/");
                });
              }} variant="contained">
                Logout
              </Button>
            </Stack>
          </Card>
        </div>
      </div>
    </GutterBackground>
  );
}
