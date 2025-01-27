import { AdsClickOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  Grow,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router";

type DashboardCardProps = {
  title: string;
  description: string;
  media: ReactNode;
  size?: number;
  pathTo?: string;
};

const DashboardCard = ({
  title,
  description,
  media: icon,
  pathTo,
  size = 3,
}: DashboardCardProps) => {
  const navigate = useNavigate();
  return (
    <Grow in={!!icon} {...(icon ? { timeout: 1000 } : {})}>
      <Card
        size={{ xs: 12, lg: size }}
        component={Grid}
        onClick={() => pathTo && navigate(pathTo)}
        sx={{
          borderRadius: 10,
          alignContent: "center",
        }}
        elevation={3}
      >
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: { xs: 2, lg: 1 },
          }}
        >
          {icon}
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Typography
              variant="body2"
              textTransform="uppercase"
              sx={{ color: "text.secondary" }}
            >
              {description}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Stack>
          <IconButton onClick={() => pathTo && navigate(pathTo)}>
            <AdsClickOutlined sx={{ fontSize: 40 }} />
          </IconButton>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default DashboardCard;
