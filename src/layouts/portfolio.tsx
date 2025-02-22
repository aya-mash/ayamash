import { Outlet, useLocation } from "react-router";
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
import { Footer } from "../components/Footer";
import { CapitalizedText, TextContainer } from "../components/Texts";
import { scrollIntoView } from "../utils/scrollUtils";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();
  const currentSegment = pathname.replace("/", "");

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
    console.debug(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fps_limit: 60,
      background: {
        color: theme.palette.background.default,
      },
      interactivity: {
        detectsOn: "window",
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
          opacity: 0.5,
          width: 1,
        },
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "out",
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 1000 }, value: 100 },
        shape: { type: "none" },
        size: { random: true, value: 10 },
      },
      detectRetina: true,
    }),
    [theme.palette.background.default, theme.palette.primary.main]
  );

  if (init) {
    return (
        <DashboardLayout
          hideNavigation
          slots={{
            toolbarActions: CustomToolbarActions,
          }}
        >
          {theme.palette.mode === "dark" && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          )}
          <PageContainer
            breadcrumbs={[]}
            title=""
            allowFullScreen
            sx={{
              pb: 5,
              zIndex: 1,
              height: "100%",
              overflow: "auto",
              minWidth: "100%",
              mx: 0,
            }}
          >
            <Outlet />
            <Footer>
              <TextContainer elevation={1}>
                <CapitalizedText
                  fontSize={{ xs: "0.65em", lg: "0.8em" }}
                  textAlign="center"
                  width="100%"
                >
                  © {new Date().getFullYear()} Aya Mash. All rights reserved.
                </CapitalizedText>
              </TextContainer>
            </Footer>
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
                onChange={(_, path) => scrollIntoView(path)}
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
