import { Chip, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { CardMembership, VolunteerActivism } from "@mui/icons-material";
import CustomizedTimeline from "./CustomizedTimeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { EDUCATION } from "../constants/education";
import { EXPERIENCE } from "../constants/experience";
import { RESUME } from "../constants/resume";
import { CapitalizedText } from "./Texts";

const Resume = () => {
  return (
    <Grid id="about" container spacing={10} my={10}>
      <Stack width="100%" spacing={1}>
        <CapitalizedText
          fontWeight={800}
          color="primary"
          sx={({ typography }) => ({
            textAlign: "center",
            fontSize: {
              xs: typography.h6.fontSize,
              lg: typography.h4.fontSize,
            },
          })}
        >
          Summary
        </CapitalizedText>
        <Typography align="center" sx={{ color: "text.secondary" }}>
          Full Stack Engineer with 5+ years of experience crafting exceptional
          user-centric web applications, I excel in transforming complex user
          experiences into reality with a strong focus on delivering solutions
          that meet challenging nonfunctional requirements. Proven ability to
          lead teams, mentor other developers, and deliver exceptional user
          experiences. Passionate about crafting innovative solutions and
          driving business impact.
        </Typography>
      </Stack>
      <Grid container spacing={5} px={10} justifyContent="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom align="center">
            Technical Skills
          </Typography>
          <Grid container justifyContent="center">
            {RESUME.technicalSkills.map((skill, index) => (
              <Chip key={skill + index} label={skill} sx={{ margin: "4px" }} />
            ))}
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom align="center">
            Key Strengths
          </Typography>
          <Grid container justifyContent="center">
            {RESUME.keyStrengths.map((strength, index) => (
              <Chip
                key={strength + index}
                label={strength}
                sx={{ margin: "4px" }}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
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

      <CustomizedTimeline
        icon={<CardMembership />}
        data={RESUME.certifications.map(
          ({ name, issuer, issued, expiration }) => ({
            title: name,
            establishment: issuer,
            duration: `${issued} - ${expiration}`,
          })
        )}
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
  );
};

export default Resume;
