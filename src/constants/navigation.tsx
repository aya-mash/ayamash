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

export default NAVIGATION;
