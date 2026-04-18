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
import { getAuth } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { gameData } from "../../util/envResolverUtilEs6";
import HttpClient from "../../services/httpClient";
import GutterBackground from "../shared/gutterBackground";

export default function SetDisplayNamePage() {
  const Method = {
    USERNAME: "USERNAME",
  };
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const auth = getAuth();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => { }, []);
  useEffect(() => {
    document.title = `Set Username`;
  }, []);

  async function setDisplayName(name) {
    setError(null)
    setShowLoader(true)

    try {
      // move this to the backend. Need to do validation!
      // Prevent name updates, only allow once!
      // check for spaces etc

      const { data, status } = await HttpClient.createUser(name, await auth.currentUser.getIdToken())

      if (status !== 200) {
        setError(data.message ?? "An error occured")
      } else {
        await auth.currentUser.reload()
        await userContext?.loadUser(auth.currentUser)

        navigate(`/user/${auth.currentUser.uid}`)
      }

      setShowLoader(false)
    } catch (e) {
      setShowLoader(false)

      setError("An error occured")
      return
    }
  }

  return (
    <GutterBackground leftText="SET" rightText="USERNAME" color={gameData.color}>
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
                  WHO
                </Typography>
              </div>
              <Stack spacing={1}>
                <FormHelperText
                  align="left"
                  variant="caption"
                  style={{ margin: 0, marginBottom: "5px" }}
                >
                  What should we call you?
                </FormHelperText>

                <TextField
                  label="Username"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value.replace(/[^a-z0-9]/gi, '').substring(0, 24))}
                  autoComplete="off"
                ></TextField>
                <Button onClick={() => setDisplayName(name)} variant="contained">
                  Submit
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

                {showLoader ? <LinearProgress id="loader" color="secondary" /> : null}
              </Stack>
            </Card>
          </Fade>
        </div>
      </div>
    </GutterBackground>
  );
}
