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
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gameData } from "../../util/envResolverUtilEs6";
import GutterBackground from "../shared/gutterBackground";

export default function SignupPage() {
  const Method = {
    USERNAME: "USERNAME",
  };
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const auth = getAuth();

  const [authMethod, setAuthMethod] = useState(Method.USERNAME);

  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    document.title = `Sign up`;
  }, []);

  async function signUp(email, password) {
    setError(null)
    setShowLoader(true)
    if (!checked) {
      setError("Please read and agree to the Terms of Service and Privacy Policy ")
      setShowLoader(false)
      return
    }

    try {

      if (authMethod === Method.USERNAME) {
        await createUserWithEmailAndPassword(auth, email, password);

        setTimeout(() => { navigate(`/user/${auth.currentUser.uid}`); setShowLoader(false) }, 200);
      }
    }
    catch (error) {
      setTimeout(() => {
        setShowLoader(false)
        if (error.code === 'auth/weak-password' || error.code === "auth/password-does-not-meet-requirements") {
          setError('Password is too weak. Passwords must be 6 or more characters with a mix of lowercase letters, uppercase letters, special characters (^ $ * . [ ] { } ( ) ? " ! @ # % & / \ , > < \' : ; | _ ~ `) and numbers. ');
        } else if (error.code === "auth/email-already-in-use") {
          setError('An account with this email already exists. Login instead?');
        } else if (error.code === "auth/invalid-email") {
          setError('Email is invalid');
        } else {
          setError("error occured");
        }
      }, 200)
    };
  }

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          select another sign up option
        </FormHelperText> */}

        <TextField
          label="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="off"
          color="info"

        ></TextField>

        <TextField
          label="Password"
          onChange={(event) => setPw(event.target.value)}
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
          type={showPassword ? "text" : "password"}
          color="info"
          autoComplete="new-password"
        ></TextField>

        <Button
          onClick={() => signUp(email, pw)}
          variant="contained"
        >
          Sign up
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

        <FormGroup>
          <FormControlLabel control={<Checkbox color="info" checked={checked}
            onChange={handleChange} />} label={<FormHelperText
              align="left"
              variant="caption"
              style={{ margin: 0, marginTop: "6px" }}
            >
              I have read and agree to the <Link to="/tos" style={{ textDecoration: "none", color: gameData.color }}>Terms of Service</Link> and <Link
                to="/privacy-policy" style={{ textDecoration: "none", color: gameData.color }}>Privacy Policy</Link>.
            </FormHelperText>} />
        </FormGroup>



        <Stack direction="row" alignItems="center" style={{ marginBottom: "5px" }}>
          <FormHelperText
            align="left"
            variant="caption"
          >
            Already have an account?
          </FormHelperText>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <FormHelperText
              align="left"
              variant="caption"
              style={{ cursor: "pointer", marginLeft: "4px", color: gameData.color }}
            >
              Login
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
          {" "}
          Email{" "}
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
    <GutterBackground
      leftText="Sign up"
      rightText="Sign up"
      color={gameData.color}
    >
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
                  SIGN UP
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
