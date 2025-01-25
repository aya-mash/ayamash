import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfilePicture from "../assets/profile_picture_grey.jpg";
import {
  AdsClickOutlined,
  DesignServices,
  Feed,
  MoreHoriz,
  WorkHistory,
} from "@mui/icons-material";
import DashboardCard from "../components/DashboardCard";
import {
  CapitalizedText,
  ScrollingText,
  TextContainer,
} from "../components/Texts";
import { useNavigate } from "react-router";
import { socialLinks } from "../components/Icons";
import { Footer } from "../components/Footer";

export default function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconFontSize = { fontSize: { xs: 60, lg: 80 } };

  return (
    <Grid container spacing={{ xs: 1, lg: 2 }} alignItems="center">
      <Grid container size={12}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card
            elevation={3}
            sx={{
              display: isMobile ? "block" : "flex",
              p: 2,
              borderRadius: 10,
            }}
          >
            <CardActionArea onClick={() => navigate("/about")}>
              {ProfilePicture ? (
                <CardMedia
                  component="img"
                  height={300}
                  width={150}
                  src={ProfilePicture}
                  alt="profile picture"
                  sx={{ borderRadius: 10 }}
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
                <Stack spacing={1} display="flex">
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textTransform="uppercase"
                    sx={{ color: "text.secondary" }}
                  >
                    FRONTEND ENGINEER.
                  </Typography>
                  <Typography variant={isMobile ? "h4" : "h3"} fontWeight={800}>
                    I'm AYA.
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    sx={{ color: "text.secondary" }}
                  >
                    Creating seamless web experiences as a Frontend Engineer and
                    design enthusiast.
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
                  justifyContent={{ xs: "space-between", sm: "space-around" }}
                >
                  <Typography
                    variant="body2"
                    component="div"
                    fontWeight={400}
                    sx={{ color: "text.secondary" }}
                  >
                    Based in Cape Town.
                  </Typography>
                  <IconButton onClick={() => navigate("/about")}>
                    <AdsClickOutlined sx={{ fontSize: 40 }} />
                  </IconButton>
                </Stack>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} container spacing={2}>
          <Grid size={12}>
            <TextContainer elevation={3}>
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
          />
          <DashboardCard
            title={"Projects"}
            description={"SHOWCASE"}
            media={<WorkHistory sx={iconFontSize} />}
            size={6}
          />
        </Grid>
      </Grid>
      <Grid container size={12} spacing={2}>
        <DashboardCard
          title={"Services"}
          description={"SPECIALIZATION"}
          media={<DesignServices sx={iconFontSize} />}
        />
        <DashboardCard
          title={"Activities"}
          description={"MY EXTRA TIME"}
          media={<MoreHoriz sx={iconFontSize} />}
        />
        <DashboardCard
          title={"Profiles"}
          description={"CONNECT WITH ME"}
          size={6}
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
      </Grid>
      <Grid size={12}>
        <Footer>
          <TextContainer elevation={3}>
            <CapitalizedText
              fontSize={{ xs: "0.65em", lg: "0.8em" }}
              textAlign="center"
              width="100%"
            >
              © {new Date().getFullYear()} Aya Mash. All rights reserved.
            </CapitalizedText>
          </TextContainer>
        </Footer>
      </Grid>
    </Grid>
  );
}
