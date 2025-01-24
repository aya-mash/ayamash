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
  Facebook,
  Feed,
  GitHub,
  Instagram,
  LinkedIn,
  MoreHoriz,
  Work,
} from "@mui/icons-material";
import DashboardCard from "../components/DashboardCard";
import {
  ScrollingText,
  ScrollingTextContainer,
} from "../components/ScrollingText";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconFontSize = { fontSize: { xs: 60, lg: 80 } };

  return (
    <Grid container spacing={2}>
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
            {ProfilePicture ? (
              <CardActionArea onClick={() => navigate("/about")}>
                <CardMedia
                  component="img"
                  height={300}
                  width={150}
                  src={ProfilePicture}
                  alt="profile picture"
                  sx={{ borderRadius: 10 }}
                />
              </CardActionArea>
            ) : (
              <Skeleton variant="rounded" width={150} height={300} />
            )}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Stack spacing={3}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    textTransform="uppercase"
                    sx={{ color: "text.secondary" }}
                  >
                    HELLO, WORLD.
                  </Typography>
                  <Typography component="div" variant="h2" fontWeight={800}>
                    I'm AYA
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    fontWeight={400}
                    sx={{ color: "text.secondary" }}
                  >
                    I am a Frontend Engineer with a passion for creating
                    beautiful and performant user interfaces.
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={() => navigate("/about")}>
                  <AdsClickOutlined />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }} container spacing={2}>
          <Grid size={12}>
            <ScrollingTextContainer
              sx={{ p: 2, borderRadius: 10, flexDirection: "row" }}
              elevation={3}
            >
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
            </ScrollingTextContainer>
          </Grid>
          <DashboardCard
            title={"Resume"}
            description={"MORE ABOUT ME"}
            icon={<Feed sx={iconFontSize} />}
            size={6}
          />
          <DashboardCard
            title={"Projects"}
            description={"SHOWCASE"}
            icon={<Work sx={iconFontSize} />}
            size={6}
          />
        </Grid>
      </Grid>
      <Grid container size={12} spacing={2}>
        <DashboardCard
          title={"Services"}
          description={"SPECIALIZATION"}
          icon={<DesignServices sx={iconFontSize} />}
          size={3}
        />
        <DashboardCard
          title={"Activities"}
          description={"MY EXTRA TIME"}
          icon={<MoreHoriz sx={iconFontSize} />}
          size={3}
        />
        <DashboardCard
          title={"Profiles"}
          description={"STAY WITH ME"}
          size={6}
          icon={
            <Stack direction="row" spacing={2}>
              <LinkedIn sx={iconFontSize} />
              <GitHub sx={iconFontSize} />
              <Facebook sx={iconFontSize} />
              <Instagram sx={iconFontSize} />
            </Stack>
          }
        />
      </Grid>
    </Grid>
  );
}
