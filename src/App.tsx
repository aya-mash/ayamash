import { Outlet } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import type { Branding } from "@toolpad/core/AppProvider";
import Logo from "./components/Branding/Logo";
import theme from "../theme";

import { useMediaQuery } from "@mui/material";
import navigation from "./constants/navigation";

export default function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const BRANDING: Branding = {
    title: isMobile ? "" : "AYABULELA MAHLATHINI",
    logo: <Logo />,
  };

  return (
    <ReactRouterAppProvider
      theme={theme}
      navigation={navigation}
      branding={BRANDING}
    >
      <CssBaseline />
      <Outlet />
    </ReactRouterAppProvider>
  );
}
