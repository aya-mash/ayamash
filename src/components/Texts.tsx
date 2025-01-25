import { Card, styled, Theme, Typography } from "@mui/material";
import { CSSProperties } from "react";

export const TextContainer = styled(Card)({
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
  padding: "1rem",
  borderRadius: 20,
  flexDirection: "row",
});

const getTextStyle = (theme: Theme): CSSProperties => ({
  display: "inline-block",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
});

export const ScrollingText = styled(Typography)(({ theme }) => ({
  ...getTextStyle(theme),
  animation: "scrolling 10s linear infinite",
  "@keyframes scrolling": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
}));

export const CapitalizedText = styled(Typography)(({ theme }) => ({
  ...getTextStyle(theme),
}));
