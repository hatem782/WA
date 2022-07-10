import React from "react";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#09BEAD",
    },
    secondary: {
      main: "#F57F17",
    },
    background_1: {
      main: "#FFFFFF",
    },
    background_2: {
      main: "#FFFFFF",
    },
    font: {
      main: "#333333",
    },
    blue_shadow:{
      main:"#0abead30",
    },
    home_shape:{
      main: "#09BEAD",
    }
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#09BEAD",
    },
    secondary: {
      main: "#F57F17",
    },
    background_1: {
      main: "#161D26",
    },
    background_2: {
      main: "#1F2935",
    },
    font: {
      main: "#95A5C6",
    },
    blue_shadow:{
      main:"#0abead00",
    },
    home_shape:{
      main: "#1F2935",
    }
  },
});



const Theme = (props) => {
  const { theme, children } = props;

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
