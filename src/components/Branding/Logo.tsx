import { useTheme } from "@mui/material";
import darkLogo from "../../assets/logo.webp";
import lightLogo from "../../assets/logo_v2.webp";
import { scrollIntoView } from "../../utils/scrollUtils";

type LogoProps = {
  maxWidth?: string;
  maxHeight?: string;
};

const Logo = ({ maxHeight = "50px", maxWidth = "50px" }: LogoProps) => {
  const theme = useTheme();
  return (
    <button
      onClick={() => scrollIntoView("home")}
      style={{
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={theme.palette.mode === "dark" ? darkLogo : lightLogo}
        alt="Logo"
        style={{ maxWidth, maxHeight }}
      />
    </button>
  );
};

export default Logo;
