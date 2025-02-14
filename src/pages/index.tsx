import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid2 as Grid,
  Skeleton,
  Stack,
  Grow,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfilePicture from "../assets/profile_picture_grey.jpg";
import Resume from "../components/Resume";
import Works from "../components/Works";
import {
  AdsClickOutlined,
  Feed,
  LocationOnRounded,
  WorkHistory,
} from "@mui/icons-material";
import DashboardCard from "../components/DashboardCard";
import { ScrollingText, TextContainer } from "../components/Texts";
import { socialLinks } from "../components/Icons";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const skillsSummary = [
    "React.JS",
    "Next.JS",
    "React Native",
    "TypeScript",
    "Tailwind",
    "JavaScript",
    "GraphQL",
    "REST",
    "Cloud Services",
    "UI/UX Design",
  ];

  const iconFontSize = { fontSize: { xs: 60, lg: 80 } };

  return (
    <Grid
      id="home"
      container
      spacing={{ xs: 1, lg: 2 }}
      alignItems="center"
      zIndex={1}
    >
      {/* Home */}
      <Grid container size={12} px={{ md: 5 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Grow
            in={!!ProfilePicture}
            {...(ProfilePicture ? { timeout: 1000 } : {})}
          >
            <Card
              elevation={1}
              sx={{
                display: isMobile ? "block" : "flex",
                p: 2,
                borderRadius: 10,
              }}
            >
              <CardActionArea onClick={() => console.log(true)}>
                {ProfilePicture ? (
                  <CardMedia
                    component="img"
                    height={300}
                    width={150}
                    src={ProfilePicture}
                    alt="profile picture"
                    sx={{ borderRadius: 10 }}
                    loading="lazy"
                  />
                ) : (
                  <Skeleton variant="rounded" width={150} height={300} />
                )}
              </CardActionArea>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                  }}
                >
                  <Stack spacing={1} alignItems="stretch" p={1}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      textTransform="uppercase"
                      sx={{ color: "text.secondary" }}
                    >
                      SOFTWARE ENGINEER.
                    </Typography>
                    <Typography
                      variant={isMobile ? "h4" : "h2"}
                      fontWeight={800}
                    >
                      I'M AYA.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Creating seamless web experiences as a Software Engineer
                      and design enthusiast.
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Stack
                    spacing={{ xs: 0, sm: 5 }}
                    width="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent={{
                      xs: "space-between",
                      sm: "space-around",
                    }}
                  >
                    <Chip
                      label="Cape Town"
                      icon={<LocationOnRounded />}
                      sx={{ color: "text.secondary" }}
                    />
                    <IconButton onClick={() => console.log(true)}>
                      <AdsClickOutlined sx={{ fontSize: 40 }} />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Box>
            </Card>
          </Grow>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} container spacing={2}>
          {!isMobile && (
            <>
              <Grid size={12}>
                <TextContainer elevation={1}>
                  <ScrollingText
                    variant="body2"
                    textTransform="uppercase"
                    sx={{ color: "text.secondary" }}
                  >
                    <span>
                      Latest work and {<b>featured</b>}. Latest work and{" "}
                      {<b>featured</b>}. Latest work and {<b>featured</b>}.
                    </span>
                    <span>
                      {" "}
                      Latest work and {<b>featured</b>}. Latest work and{" "}
                      {<b>featured</b>}.
                    </span>
                  </ScrollingText>
                </TextContainer>
              </Grid>

              <DashboardCard
                title={"Resume"}
                description={"MORE ABOUT ME"}
                media={<Feed sx={iconFontSize} />}
                size={6}
                pathTo="#about"
              />
              <DashboardCard
                title={"Projects"}
                description={"SHOWCASE"}
                media={<WorkHistory sx={iconFontSize} />}
                size={6}
                pathTo="#works"
              />
            </>
          )}
        </Grid>
        <DashboardCard
          title={"Technologies"}
          description={"SPECIALIZATION"}
          size={12}
          media={
            <Grid container spacing={1}>
              {skillsSummary.map((label) => (
                <Chip key={label} label={label} size="small" color="default" />
              ))}
            </Grid>
          }
        />
        {!isMobile && (
          <DashboardCard
            title={"Profiles"}
            description={"CONNECT WITH ME"}
            size={12}
            media={
              <Stack direction="row" spacing={2}>
                {socialLinks.map(({ link, icon }, index) => (
                  <IconButton
                    key={link + index}
                    onClick={() => window.open(link, "_blank")}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            }
          />
        )}
      </Grid>
      {/* About */}
      <Resume />
      {/* Projects */}
      <Works />
      {/* Contact */}
      <ContactForm />
    </Grid>
  );
}
