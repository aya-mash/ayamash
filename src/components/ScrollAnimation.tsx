import { useEffect, useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { Grid2 } from "@mui/material";

type TransitionType = "grow" | "slide";
type SlideDirection = "left" | "right" | "up" | "down";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  transitionType?: TransitionType;
  slideDirection?: SlideDirection;
  size?: number;
  height?: string;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  transitionType = "grow",
  slideDirection = "up",
  size = 6,
  height = "fit-content",
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getAnimation = () => {
    if (transitionType === "grow") {
      return { opacity: 1, scale: 1 };
    } else {
      const slideVariants: Record<SlideDirection, object> = {
        left: { x: -50, opacity: 0 },
        right: { x: 50, opacity: 0 },
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
      };
      return { opacity: 1, x: 0, y: 0, ...slideVariants[slideDirection] };
    }
  };

  return (
    <Grid2
      container
      size={{ xs: 12, lg: size }}
      p={{ xs: 2, lg: 1 }}
      borderRadius={10}
      justifyContent="center"
      height={height}
    >
      <motion.div
        ref={ref}
        initial={
          transitionType === "grow"
            ? { opacity: 0, scale: 0.8 }
            : getAnimation()
        }
        animate={isVisible ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </Grid2>
  );
};

export default ScrollAnimation;
