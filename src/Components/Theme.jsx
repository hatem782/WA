import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
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
    }
  },
});

const darkTheme = createMuiTheme({
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
    }
  },
});



const Theme = (props) => {
  const { dark = false, children } = props;

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
