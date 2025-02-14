import { Typography, Paper, Grid2 as Grid } from "@mui/material";
import { RESUME } from "../constants/resume";
import { CapitalizedText } from "../components/Texts";
import CustomizedTimeline from "../components/CustomizedTimeline";
import { EDUCATION } from "../constants/education";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { EXPERIENCE } from "../constants/experience";

const ResumePage = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{ padding: "16px", marginBottom: "32px", borderRadius: 5 }}
      >
        <CapitalizedText
          fontWeight={800}
          sx={({ typography }) => ({
            textAlign: { xs: "left", lg: "right" },
            fontSize: {
              xs: typography.h6.fontSize,
              lg: typography.h4.fontSize,
            },
          })}
          gutterBottom
        >
          Summary
        </CapitalizedText>
        <Typography variant="body1">{RESUME.summary}</Typography>
      </Paper>

      <Grid container spacing={3} size={{ xs: 12, md: 6 }}>
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
    </>
  );
};

export default ResumePage;
