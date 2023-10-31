import { Montserrat, Roboto, Merriweather } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#E27D60",
    },
    secondary: {
      main: "#E8A87C",
    },
    text: {
      primary: "#3e656c",
    },
    background: {
      // default: "#202020",
      // default: "#0B6B7F",
      // default: "transparent",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: merriweather.style.fontFamily,
      fontSize: "4rem",
      fontWeight: "700",
      "@media (max-width:920px)": {
        fontSize: "3rem",
      },
      // "@media (max-width:775px)": {
      //   fontSize: "1.5rem",
      // },
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: "3rem",
      "@media (max-width:775px)": {
        fontSize: "1rem",
      },
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: "2rem",
      "@media (max-width:920px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:775px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: "500",
      fontStyle: "italic",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: "#3e656c",
          backgroundColor: "FFFFFF",
        },
      },
    },
  },
});

export default theme;
