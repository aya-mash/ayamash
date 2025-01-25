import {
  GitHub,
  LinkedIn,
  Instagram,
  Facebook,
  YouTube,
  WhatsApp,
} from "@mui/icons-material";

const iconStyle = { fontSize: { xs: 20, lg: 80 }, color: "text.secondary" };

export const socialLinks = [
  {
    name: "GitHub",
    icon: <GitHub sx={iconStyle} />,
    link: "https://github.com/aya-mash",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={iconStyle} />,
    link: "https://www.linkedin.com/in/ayabulela-mahlathini/",
  },
  {
    name: "Instagram",
    icon: <Instagram sx={iconStyle} />,
    link: "https://www.instagram.com/aya.mash/",
  },
  {
    name: "Facebook",
    icon: <Facebook sx={iconStyle} />,
    link: "https://www.facebook.com/ayabulela.mahlathini/",
  },
  {
    name: "YouTube",
    icon: <YouTube sx={iconStyle} />,
    link: "https://www.youtube.com/@aya_mash",
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp sx={iconStyle} />,
    link: "https://wa.me/+27849086628",
  },
];
