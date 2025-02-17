import { Chip, Grid2 as Grid, Stack, Tab, Typography } from "@mui/material";
import { CardMembership, VolunteerActivism } from "@mui/icons-material";
import CustomizedTimeline from "./CustomizedTimeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { EDUCATION } from "../constants/education";
import { EXPERIENCE } from "../constants/experience";
import { RESUME } from "../constants/resume";
import { CapitalizedText } from "./Texts";
import ScrollAnimation from "./ScrollAnimation";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

const Resume = () => {
  const [tabValue, setTabValue] = useState("skills");
  return (
    <Grid id="about" container spacing={10} my={10}>
      <ScrollAnimation transitionType="grow" size={12}>
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
          <Typography
            align="center"
            px={{ md: 12 }}
            sx={{ color: "text.secondary" }}
          >
            I’m a Full Stack Engineer with 5+ years of experience solving
            problems, writing clean code, and working on products that make an
            impact. With a deep love for frontend development and UI/UX, I
            specialize in crafting sleek, high-performance applications using
            React, TypeScript, and Next.js, while also keeping things solid on
            the backend. I’m a fast learner and highly adaptive to new languages
            and technologies, allowing me to pick up new tools quickly and build
            efficient, scalable solutions. For me, great software is more than
            just code—it’s about crafting an experience that’s as enjoyable to
            use as it is to build.
          </Typography>
        </Stack>
      </ScrollAnimation>
      <Grid component={Grid} justifyContent="center" container width="100%">
        <TabContext value={tabValue}>
          <TabList
            id="skills"
            onChange={(_, value) => setTabValue(value)}
            aria-label="tabs for resume"
          >
            <Tab label="Skills" aria-label="skils" value="skills" />
            <Tab
              label="Experience"
              aria-label="experience"
              value="experience"
            />
            <Tab label="More" aria-label="more" value="more" />
          </TabList>
          <TabPanel value="skills">
            <Grid container spacing={5} px={{ md: 10 }} justifyContent="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h5" gutterBottom align="center">
                  Technical Skills
                </Typography>
                <ScrollAnimation transitionType="grow" size={12}>
                  <Grid container justifyContent="center">
                    {RESUME.technicalSkills.map((skill, index) => (
                      <Chip
                        key={skill + index}
                        label={skill}
                        sx={{ margin: "4px" }}
                      />
                    ))}
                  </Grid>
                </ScrollAnimation>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h5" gutterBottom align="center">
                  Key Strengths
                </Typography>
                <ScrollAnimation transitionType="grow" size={12}>
                  <Grid container justifyContent="center">
                    {RESUME.keyStrengths.map((strength, index) => (
                      <Chip
                        key={strength + index}
                        label={strength}
                        sx={{ margin: "4px" }}
                      />
                    ))}
                  </Grid>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="experience">
            <Grid container>
              <ScrollAnimation transitionType="slide" slideDirection="left">
                <CustomizedTimeline
                  headerTitle="Work"
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
              </ScrollAnimation>
              <ScrollAnimation transitionType="slide" slideDirection="right">
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
              </ScrollAnimation>
            </Grid>
          </TabPanel>
          <TabPanel value="more" sx={{ display: "flex", justifyContent: "center" }}>
            <ScrollAnimation transitionType="slide" slideDirection="left">
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
            </ScrollAnimation>

            <ScrollAnimation transitionType="slide" slideDirection="right">
              <CustomizedTimeline
                icon={<VolunteerActivism />}
                data={RESUME.volunteering.map(
                  ({ title, organization, dates }) => ({
                    title,
                    establishment: organization,
                    duration: dates,
                  })
                )}
                headerTitle="Volunteering"
              />
            </ScrollAnimation>
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default Resume;
