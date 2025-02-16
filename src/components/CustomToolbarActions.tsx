import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { ToolbarActions } from "@toolpad/core";
import ResumePDF from "../assets/resume.pdf";
import { Download } from "@mui/icons-material";
import { scrollIntoView } from "../utils/scrollUtils";

const sections = ["Home", "About", "Projects", "Contact"];

const CustomToolbarActions = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isDesktop ? (
        <>
          {sections.map((section) => (
            <Button
              key={section}
              variant="outlined"
              sx={{ borderRadius: 10 }}
              onClick={() => scrollIntoView(section.toLowerCase())}
            >
              {section}
            </Button>
          ))}
          <Button
            variant="contained"
            size="large"
            component="a"
            href={ResumePDF}
            download
          >
            Download Resume
          </Button>
        </>
      ) : (
        <IconButton size="large" component="a" href={ResumePDF} download>
          <Download color="primary" />
        </IconButton>
      )}
      <ToolbarActions />
    </>
  );
};

export default CustomToolbarActions;
