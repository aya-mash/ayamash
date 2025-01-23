import { useTheme } from "@mui/material";
import darkLogo from "../../assets/logo.png";
import lightLogo from "../../assets/logo_v2.png";

const Logo = () => {
  const theme = useTheme();
  return (
    <img
      src={theme.palette.mode === "dark" ? darkLogo : lightLogo}
      alt="Logo"
    />
  );
};

export default Logo;
