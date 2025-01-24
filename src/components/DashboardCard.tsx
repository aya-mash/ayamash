import { AdsClickOutlined } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  size: number;
};

const DashboardCard = ({
  title,
  description,
  icon,
  size,
}: DashboardCardProps) => {
  return (
    <Grid size={size}>
      <Card
        sx={{ p: 3, borderRadius: 10, height: "100%", alignContent: "center" }}
        elevation={3}
      >
        <CardActionArea sx={{ display: "flex", justifyContent: "center" }}>
          {icon}
        </CardActionArea>
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
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <IconButton>
              <AdsClickOutlined />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DashboardCard;
