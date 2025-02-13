import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Layout from "./layouts/dashboard";
import DashboardPage from "./pages";
import AboutPage from "./pages/about";
import WorksPage from "./pages/works";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "",
            Component: DashboardPage,
          },
          {
            path: "/about",
            Component: AboutPage,
          },
          {
            path: "/works",
            Component: WorksPage,
          },
          {
            path: "/contact",
            Component: ContactPage,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
