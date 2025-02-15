import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid2 as Grid,
  Grow,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { liveProjects, otherProjects, Project } from "../constants/projects";
import { CapitalizedText } from "../components/Texts";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Grow in>
      <Card
        component={Stack}
        elevation={3}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          borderRadius: 10,
        }}
        aria-label={`Project: ${project.title}`}
      >
        {project.imageUrl ? (
          <CardMedia
            component="img"
            image={project.imageUrl}
            alt={`${project.title} cover image`}
            loading="eager"
          />
        ) : (
          project.liveUrl && (
            <Skeleton variant="rounded" width="100%" height={200} />
          )
        )}
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" component="h3" gutterBottom>
              {project.title}
            </Typography>{" "}
            <Grid container spacing={1} pt={1}>
              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Grid>
            <Typography variant="caption" color="text.secondary">
              {project.date} • {project.role}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {project.description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 1,
            mt: 0,
            pb: 2,
            px: 2,
          }}
        >
          {project.liveUrl && (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{ borderRadius: 10 }}
              size="small"
              onClick={() => window.open(project.liveUrl)}
              startIcon={<VisibilityIcon />}
            >
              View
            </Button>
          )}
          {project.sourceCodeUrl && (
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{ borderRadius: 10 }}
              size="small"
              onClick={() => window.open(project.sourceCodeUrl)}
              startIcon={<GitHubIcon />}
            >
              Source Code
            </Button>
          )}
        </CardActions>
      </Card>
    </Grow>
  );
};

const Works = () => {
  return (
    <Paper
      id="projects"
      elevation={0}
      sx={{
        background: "none",
        px: {
          md: 10,
        },
        gap: 2,
      }}
    >
      <Grid container spacing={2} pb={3} justifyContent="center">
        <CapitalizedText
          fontWeight={800}
          color="primary"
          sx={({ typography }) => ({
            textAlign: "center",
            fontSize: {
              xs: typography.h6.fontSize,
              lg: typography.h2.fontSize,
            },
          })}
        >
          Projects
        </CapitalizedText>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="p"
          align="center"
        >
          Here are some of the side projects I'm working on. These projects
          reflect my passion for learning, experimenting with new technologies
          and solving real-world problems.
        </Typography>
      </Grid>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {liveProjects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "text.secondary",
        }}
        gutterBottom
      ></Typography>
      <Grid container spacing={4}>
        {otherProjects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Works;
