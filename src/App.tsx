import { Outlet } from "react-router";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import type { Branding, Navigation } from "@toolpad/core/AppProvider";
import Logo from "./components/Branding/Logo";
import theme from "../theme";
import {
  ContactPage,
  Dashboard,
  Person,
  WorkHistory,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const NAVIGATION: Navigation = [
  {
    title: "Home",
    icon: <Dashboard />,
  },
  {
    segment: "about",
    title: "About",
    icon: <Person />,
  },
  {
    segment: "works",
    title: "Works",
    icon: <WorkHistory />,
  },
  {
    segment: "contact",
    title: "Contact",
    icon: <ContactPage />,
  },
];

export default function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const BRANDING: Branding = {
    title: isMobile ? "" : "AYABULELA MAHLATHINI",
    logo: <Logo />,
  };

  return (
    <ReactRouterAppProvider
      theme={theme}
      navigation={NAVIGATION}
      branding={BRANDING}
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
