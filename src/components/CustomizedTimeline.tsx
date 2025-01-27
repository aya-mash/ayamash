import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { Chip, Grid2 as Grid, Paper } from "@mui/material";
import { CapitalizedText } from "./Texts";

type TimelineProps = {
  title: string;
  establishment: string;
  duration: string;
  type?: string;
};

type Props = {
  icon: ReactNode;
  data: TimelineProps[];
  headerTitle: string;
};

const CustomizedTimeline = ({ icon, data, headerTitle }: Props) => {
  return (
    <Grid
      container
      size={{ xs: 12, lg: 6 }}
      p={{ xs: 2, lg: 3 }}
      component={Paper}
      elevation={3}
      borderRadius={10}
      justifyContent="center"
      alignItems="flex-start"
    >
      <CapitalizedText
        fontWeight={{
          xs: 400,
          lg: 800,
        }}
        color="primary"
        sx={({ typography }) => ({
          fontSize: {
            xs: typography.overline.fontSize,
            lg: typography.h4.fontSize,
          },
        })}
      >
        {headerTitle}
      </CapitalizedText>
      <Timeline position="alternate">
        {data.map(({ title, establishment, duration, type }) => (
          <TimelineItem key={title + establishment + duration}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="subtitle2"
              color="text.secondary"
            >
              {duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>{icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: { md: "12px" },
                px: { md: 2 },
                gap: 1,
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="button"
                fontWeight={{ lg: 600 }}
                component="span"
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {establishment}
              </Typography>
              <Chip label={type} size="small" sx={{ mt: 1 }} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
};

export default CustomizedTimeline;
