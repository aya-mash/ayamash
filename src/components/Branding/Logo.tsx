import { useTheme } from "@mui/material";
import darkLogo from "../../assets/logo.png";
import lightLogo from "../../assets/logo_v2.png";

type LogoProps = {
  maxWidth?: string;
  maxHeight?: string;
};

const Logo = ({ maxHeight = "50px", maxWidth = "50px" }: LogoProps) => {
  const theme = useTheme();
  return (
    <img
      src={theme.palette.mode === "dark" ? darkLogo : lightLogo}
      alt="Logo"
      style={{ maxWidth, maxHeight }}
    />
  );
};

export default Logo;
