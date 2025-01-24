import { Card, styled, Typography } from "@mui/material";

export const ScrollingTextContainer = styled(Card)({
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
});

export const ScrollingText = styled(Typography)({
  display: "inline-block",
  whiteSpace: "nowrap",
  animation: "scrolling 10s linear infinite",
  "@keyframes scrolling": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
});
