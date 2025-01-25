import { Outlet, useLocation, useNavigate } from "react-router";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import CustomToolbarActions from "../components/CustomToolbarActions";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import navigation from "../constants/navigation";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();
  const currentSegment = pathname.replace("/", "");
  const navigate = useNavigate();

  return (
    <DashboardLayout
      defaultSidebarCollapsed
      hideNavigation={isMobile}
      slots={{
        toolbarActions: CustomToolbarActions,
      }}
    >
      <PageContainer breadcrumbs={[]} title="" sx={{ pb: 5 }}>
        <Outlet />
      </PageContainer>
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "transparent",
            borderRadius: "20px 20px 0 0",
          }}
          elevation={3}
        >
          <BottomNavigation
            value={currentSegment}
            onChange={(_, path) => navigate(`/${path}`)}
            sx={{ borderRadius: 20 }}
          >
            {navigation.map(
              (
                { title = "Untitled", segment = "", icon },
                index,
                { length }
              ) => (
                <BottomNavigationAction
                  key={segment}
                  label={title}
                  icon={icon}
                  value={segment}
                  sx={{
                    "&.MuiBottomNavigationAction-root.Mui-selected": {
                      bgcolor: theme.palette.action.selected,
                      borderRadius: `${index === 0 ? 20 : 0}px ${index === length - 1 ? 20 : 0}px 0 0`,
                    },
                  }}
                />
              )
            )}
          </BottomNavigation>
        </Paper>
      )}
    </DashboardLayout>
  );
}
