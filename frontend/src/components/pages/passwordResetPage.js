import {
  Button,
  Card,
  Fade,
  FormHelperText,
  LinearProgress,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function PasswordResetPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const auth = getAuth();

  const [email, setEmail] = useState();
  const [error, setError] = useState("");

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => { }, []);

  useEffect(() => {
    document.title = `Reset password`;
  }, []);


  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        setError("Sent password reset email!");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
      });
  }

  return (
    <GutterBackground leftText="PASSWORD" rightText="RESET" color={gameData.color}>
      <div style={{ margin: "auto" }}>
        <div style={{ margin: "auto" }}>
          <Fade in={true} timeout={500}>

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
                  RESET
                </Typography>
              </div>
              <Stack spacing={1}>
                <TextField
                  label="Email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="off"
                ></TextField>

                <Button onClick={() => resetPassword(email)} variant="contained">
                  Send
                </Button>

                {!error ? null : (
                  <FormHelperText
                    align="left"
                    variant="caption"
                    style={{ marginBottom: "5px" }}
                  >
                    {error}
                  </FormHelperText>
                )}
                {showLoader ? <LinearProgress id="loader" /> : null}
              </Stack>
            </Card>
          </Fade>
        </div>
      </div>
    </GutterBackground>
  );
}
