import { CircularProgress, Box, Typography, useTheme } from "@mui/material";
import logoDark from "../assets/logo.webp";
import logo from "../assets/logo_v2.webp";
import { motion } from "framer-motion";

export const Fallback = () => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.paper"
    >
      <motion.img
        src={mode === "dark" ? logoDark : logo}
        alt="Logo"
        loading="eager"
        width={100}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: 100,
          marginBottom: 20,
        }}
      />
      <Typography variant="h6" gutterBottom>
        Loading...
      </Typography>
      <CircularProgress />
    </Box>
  );
};
