import { Link, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/navBar.css";

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack
      style={{
        backgroundColor: "#000000",
        position: "sticky",
        width: "100%",
        top: 0,
        left: 0,
        paddingTop: "30px",
        paddingBottom: "30px",
        zIndex: 100,
        boxSizing: "border-box",
        boxShadow: "0px 0px 1px black",
        color: theme.palette.text.dark
      }}
      sx={{ px: 4, m: 0, fontSize: { xs: "12px", sm: "14px" } }}
      direction="row"
      spacing={4}
      alignItems="center"
      justifyContent="center"

    >
      <Stack alignItems={"center"} spacing={2} justifyContent="center">
        <Typography style={{ fontWeight: "bold" }}>This site has fast and flashing animations that may affect photosensitive users</Typography>
        <Stack spacing={2} direction="row" style={{ position: "relative" }}>
          <Stack direction="column" spacing={0.5} justifyContent="start" alignItems="end" >
            <NavLink
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "right"

              }}
              to="/third-party"
            >
              Third Party Licenses
            </NavLink>
            <NavLink
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "right"
              }}
              to="/cookies"
            >
              Cookies
            </NavLink>

            <NavLink
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "right"
              }}
              to="/privacy-policy"

            >
              Privacy Policy
            </NavLink>
            <NavLink
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
              }}
              to="/tos"
            >
              Terms of Service
            </NavLink>

          </Stack>
          <div style={{ width: "1px", backgroundColor: theme.palette.text.dark, }} />

          <Stack direction="column" spacing={0.5} justifyContent="start" alignItems="start">
            <Link
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "left"
              }}
              href="https://ko-fi.com/combo_central"
              target="_blank"
            >
              Support combo central (Kofi)
            </Link>
            <Link
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "left"
              }}
              href="https://github.com/combo-central/bugs-and-feature-requests/labels/bug"
              target="_blank"
            >
              Report a bug or issue
            </Link>

            <Link
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "left"
              }}
              href="https://github.com/combo-central/bugs-and-feature-requests/labels/feature%20request%20%2F%20enhancement"
              target="_blank"
            >
              Suggest a feature
            </Link>

            <NavLink
              style={{
                color: theme.palette.text.dark,
                textDecoration: "none",
                textAlign: "left"
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
