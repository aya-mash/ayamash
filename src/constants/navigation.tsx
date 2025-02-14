import {
  Person,
  WorkHistory,
  ContactPage,
  Dashboard,
} from "@mui/icons-material";
import { NavigationPageItem } from "@toolpad/core/AppProvider";

const NAVIGATION: NavigationPageItem[] = [
  {
    title: "Home",
    segment: "home",
    icon: <Dashboard />,
  },
  {
    segment: "about",
    title: "About",
    icon: <Person />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <WorkHistory />,
  },
  {
    segment: "contact",
    title: "Contact",
    icon: <ContactPage />,
  },
];

export default NAVIGATION;
