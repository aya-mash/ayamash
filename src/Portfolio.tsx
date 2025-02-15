import { lazy, Suspense } from "react";
import { Fallback } from "./pages/fallback";

const Layout = lazy(() => import("./layouts/portfolio"));

const Portfolio = () => (
  <Suspense fallback={<Fallback />}>
    <Layout />
  </Suspense>
);

export default Portfolio;
