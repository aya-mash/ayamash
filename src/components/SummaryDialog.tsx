/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import ProfilePicture from "../assets/profile_picture_grey.jpg";
import { CapitalizedText } from "./Texts";
import { CardMembership, Close, VolunteerActivism } from "@mui/icons-material";
import Logo from "./Branding/Logo";
import { useNavigate } from "react-router";
import CustomToolbarActions from "./CustomToolbarActions";
import CustomizedTimeline from "./CustomizedTimeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { EDUCATION } from "../constants/education";
import { EXPERIENCE } from "../constants/experience";
import { RESUME } from "../constants/resume";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement, Ref } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  onClose: () => void;
};

const SummaryDialog = ({ open, onClose }: Props) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      transitionDuration={300}
      slotProps={{
        transition: {
          in: open,
          appear: open,
        },
      }}
      slots={{
        transition: Transition,
      }}
    >
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
          <Grid container spacing={2} sx={{ marginTop: "32px" }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" gutterBottom>
                Technical Skills
              </Typography>
              {RESUME.technicalSkills.map((skill, index) => (
                <Chip
                  key={skill + index}
                  label={skill}
                  sx={{ margin: "4px" }}
                />
              ))}
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" gutterBottom>
                Key Strengths
              </Typography>
              {RESUME.keyStrengths.map((strength, index) => (
                <Chip
                  key={strength + index}
                  label={strength}
                  sx={{ margin: "4px" }}
                />
              ))}
            </Grid>
          </Grid>

          <CustomizedTimeline
            icon={<CardMembership />}
            data={RESUME.certifications.map(({ name, issued, expiration }) => ({
              title: name,
              establishment: `Issued: ${issued} | Expiration: ${expiration}`,
              duration: "",
            }))}
            headerTitle="Certifications"
          />

          <CustomizedTimeline
            icon={<VolunteerActivism />}
            data={RESUME.volunteering.map(({ title, organization, dates }) => ({
              title,
              establishment: organization,
              duration: dates,
            }))}
            headerTitle="Volunteering"
          />
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained" onClick={() => navigate("/about")}>
          Download
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SummaryDialog;
