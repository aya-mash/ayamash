import {
  AppBar,
  Button,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2 as Grid,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ProfilePicture from "../assets/profile_picture_grey.jpg";
import { CapitalizedText } from "./Texts";
import { Close } from "@mui/icons-material";
import Logo from "./Branding/Logo";
import { useNavigate } from "react-router";
import CustomToolbarActions from "./CustomToolbarActions";
import CustomizedTimeline from "./CustomizedTimeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { EDUCATION } from "../constants/education";
import { EXPERIENCE } from "../constants/experience";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SummaryDialog = ({ open, onClose }: Props) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <DialogTitle
        position="relative"
        component={AppBar}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={2}
      >
        <Logo />
        <Stack direction="row" alignItems="center" gap={1}>
          <CustomToolbarActions />
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Grid
          container
          direction="row"
          spacing={1}
          justifyContent="space-around"
          p={{
            xs: 0,
            md: 5,
          }}
        >
          <Grid
            container
            component={Paper}
            elevation={3}
            borderRadius={10}
            p={1}
            size={{ xs: 12, md: 3 }}
          >
            {ProfilePicture ? (
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                src={ProfilePicture}
                alt="profile picture"
                sx={{ borderRadius: 10 }}
                loading="lazy"
              />
            ) : (
              <Skeleton variant="rounded" width={150} height={300} />
            )}
          </Grid>
          <Grid
            container
            size="grow"
            justifyContent="flex-start"
            component={Paper}
            elevation={3}
            borderRadius={10}
            p={{
              xs: 2,
              md: 3,
            }}
          >
            <Stack width="100%">
              <CapitalizedText
                fontWeight={800}
                color="primary"
                sx={({ typography }) => ({
                  textAlign: { xs: "left", lg: "right" },
                  fontSize: {
                    xs: typography.h6.fontSize,
                    lg: typography.h2.fontSize,
                  },
                })}
              >
                Self-Summary
              </CapitalizedText>
              <CapitalizedText
                sx={({ typography }) => ({
                  fontSize: {
                    xs: typography.h6.fontSize,
                    lg: typography.h5.fontSize,
                  },
                })}
                fontWeight={500}
                color="primary"
              >
                Ayabulela Mahlathini
              </CapitalizedText>
            </Stack>
            <Typography variant="body2">
              Software Engineer with 5+ years of experience crafting exceptional
              user-centric web applications, I excel in transforming complex
              user experiences into reality with a strong focus on delivering
              solutions that meet challenging nonfunctional requirements. Proven
              ability to lead teams, mentor other developers, and deliver
              exceptional user experiences. Passionate about crafting innovative
              solutions and driving business impact.
            </Typography>{" "}
            <Chip label="React.JS" color="default" />
            <Chip label="React Native" color="default" />
            <Chip label="TypeScript" color="default" />
            <Chip label="JavaScript" color="default" />
            <Chip label="GraphQL" color="default" />
            <Chip label="REST" color="default" />
            <Chip label="Cloud Services" color="default" />
            <Chip label="UI/UX Design" color="default" />
            <Chip label="Development Tools" color="default" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <CustomizedTimeline
            headerTitle="Experience"
            icon={<WorkRoundedIcon />}
            data={EXPERIENCE.map(
              ({ company, title, dates, employment_type }) => ({
                title: title,
                establishment: company,
                duration: `${dates.start} - ${dates.end}`,
                type: employment_type,
              })
            )}
          />
          <CustomizedTimeline
            headerTitle="Education"
            icon={<SchoolRoundedIcon />}
            data={EDUCATION.map(
              ({ institution, dates, qualification, type }) => ({
                title: qualification,
                establishment: institution,
                duration: `${dates.start} - ${dates.end}`,
                type,
              })
            )}
          />
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained" onClick={() => navigate("/about")}>
          Learn More
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SummaryDialog;
