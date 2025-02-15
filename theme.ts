"use client";
import { createTheme, Theme } from "@mui/material/styles";

const getClickableStyle = ({ theme }: { theme: Theme }) => ({
  "&:hover": {
    transform: "scale(1.05)",
    color: theme.palette.mode === "light" ? "#121212" : "#fff",
  },
});

const getGradientBackground = ({ palette }: Theme) => ({
  backgroundImage:
    palette.mode === "light"
      ? "#fff"
      : "linear-gradient(to right, #121212, #141414, #1f1f1f)",
});

const theme = createTheme({
  transitions: { duration: { enteringScreen: 0 } },
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  defaultColorScheme: "light",
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: getClickableStyle,
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: getClickableStyle,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 50,
          "&:hover": {
            transform: getClickableStyle({ theme })["&:hover"].transform,
          },
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          borderRadius: 10,
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
      styleOverrides: {
        root: ({ theme }) => ({
          ...getGradientBackground(theme),
          transition: "transform 0.3s ease-in-out",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => getGradientBackground(theme),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => getGradientBackground(theme),
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#121212",
        },
        text: {
          primary: "#000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#fff",
        },
        text: {
          primary: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
