import { ThemeProvider, createTheme } from "@mui/material/styles";
const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
      contrastText: "#f2f0f7",
    },
    anchor: {
      dark: "#000000",
      medium: "#757575",
      mediumDark: "#242424",
      almostDark: "#0a0a0a"
    },
    secondary: {
      main: "#5c5856",
      darker: "#4d4948",

    },
    accent: {
      main: "A0FF7E",
    },
    background: {
      light: "#444444",
      default: "#333333",
      // paper: "#141414",
      paper: "#141414",

      medDark: "#2B2B2B",
      dark: "#272727",
    },
    text: {
      primary: "#cacccf",
      secondary: "#DEDEDE",
      dark: "#BFBFBF",
      veryDark: "#adadac",
    },
    error: {
      main: "#8a1919",
    },
    info: {
      main: "#bfbdbb",
    },
    success: {
      main: "#000000",
    },
    type: "dark",
    warning: {
      main: "#903630",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius:"2px"
        },
      },
    },
  },
});

export { mainTheme };
