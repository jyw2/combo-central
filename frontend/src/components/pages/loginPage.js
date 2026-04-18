import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Button,
  Card,
  Fade,
  FormHelperText,
  IconButton,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function LoginPage() {
  const Method = {
    USERNAME: "USERNAME",
  };
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const auth = getAuth();

  const [authMethod, setAuthMethod] = useState(Method.USERNAME);

  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [pw, setPw] = useState();
  const [error, setError] = useState("");

  const [showLoader, setShowLoader] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  useEffect(() => { }, []);

  useEffect(() => {
    document.title = `Login`;
  }, []);


  function signUp(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(`/user/${auth.currentUser.uid}`);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setError("Email or password is incorrect");
        } else {
          setError("An error occurred");
        }
      });
  }

  function renderUsernamePw() {
    return (
      <Stack spacing={1}>
        {/* RENABLE ONCE OTHER LOGIN TYPES ARE SUPPORTED */}
        {/* <FormHelperText
          align="left"
          variant="caption"
          style={{ margin: 0, marginBottom: "5px", cursor: "pointer" }}
          onClick={() => setAuthMethod(null)}
        >
          select another login option
        </FormHelperText> */}

        <TextField
          label="Email"
          type="email"
          color="info"
          onChange={(event) => setEmail(event.target.value)}
        ></TextField>

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          color="info"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          onChange={(event) => setPw(event.target.value)}
        ></TextField>

        <Button onClick={() => signUp(email, pw)} variant="contained">
          Login
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

        <Stack direction="row" alignItems="center" justifyContent="space-between" style={{ marginBottom: "5px" }}>
          <Stack direction="row">
            <FormHelperText
              align="left"
              variant="caption"
            >
              Need an account?
            </FormHelperText>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <FormHelperText
                align="left"
                variant="caption"
                style={{ cursor: "pointer", marginLeft: "4px", color: gameData.color }}

              >
                Sign up
              </FormHelperText>
            </Link>
          </Stack>
          <Link to="/password-reset" style={{ textDecoration: "none" }}>
            <FormHelperText
              align="left"
              variant="caption"
              style={{ color: gameData.color }}
            >
              Reset password
            </FormHelperText>
          </Link>
        </Stack>
      </Stack>
    );
  }

  function renderOptions(mode) {
    return (
      <Stack>
        <Button
          variant="contained"
          onClick={() => setAuthMethod(Method.USERNAME)}
        >
          <EmailIcon sx={{ mr: 2 }} />
          Email
        </Button>
      </Stack>
    );
  }

  function renderAuthMode(method) {
    switch (method) {
      case Method.USERNAME:
        return renderUsernamePw();
      default:
        return renderOptions();
    }
  }

  return (
    <GutterBackground leftText="Login" rightText="Login" color={gameData.color}>
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
                  LOGIN
                </Typography>
              </div>
              {renderAuthMode(authMethod)}
            </Card>
          </Fade>
        </div>
      </div>
    </GutterBackground>
  );
}
