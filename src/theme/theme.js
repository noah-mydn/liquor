import { createTheme } from "@mui/material";

/* CSS HEX */
let color_one = "#1A1A2E";
let color_two = "#16213E";
let color_three = "#0F3460";
let color_four = "#F11D1D";
let color_five = "#fff";
const theme = createTheme({
  palette: {
    primary: {
      main: color_one,
    },
    secondary: {
      main: color_two,
    },
    tertiary: {
      main: color_three,
    },
    background: {
      main: color_four,
    },
    info: {
      main: color_five,
    },
    warning: {
      main: "#f8c32a",
    },
  },

  typography: {
    fontFamily: ["Changa", "PT Sans Narrow", "sans-serif"].join(","),
    fontSize: 16,
  },
});

export default theme;
