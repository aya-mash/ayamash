import { CircularProgress, Box, Typography, keyframes } from "@mui/material";
import logo from "../assets/logo.webp";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Fallback = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.paper"
    >
      <img
        src={logo}
        alt="Logo"
        loading="eager"
        style={{
          width: 100,
          marginBottom: 20,
          animation: `${pulse} 1.5s ease-in-out infinite`,
        }}
      />
      <Typography variant="h6" gutterBottom>
        Loading...
      </Typography>
      <CircularProgress />
    </Box>
  );
};
