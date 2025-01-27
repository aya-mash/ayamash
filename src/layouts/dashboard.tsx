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
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();
  const currentSegment = pathname.replace("/", "");
  const navigate = useNavigate();

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fps_limit: 60,
      background: {
        color: theme.palette.background.default,
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: { particles_nb: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: theme.palette.primary.main },
        links: {
          color: theme.palette.primary.main,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { random: true, value: 5 },
      },
      detectRetina: true,
    }),
    [theme.palette.background.default, theme.palette.primary.main]
  );

  if (init) {
    return (
      <DashboardLayout
        defaultSidebarCollapsed
        hideNavigation={isMobile}
        slots={{
          toolbarActions: CustomToolbarActions,
        }}
      >
        <PageContainer breadcrumbs={[]} title="" sx={{ pb: 5 }}>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
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
              zIndex: 1,
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
}
