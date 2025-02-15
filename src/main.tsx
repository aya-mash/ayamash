import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Content from "./pages";
import PortfolioLayout from "./Portfolio";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "",
        Component: PortfolioLayout,
        children: [
          {
            path: "",
            Component: Content,
          },
          // {
          //   path: "/about",
          //   Component: AboutPage,
          // },
          // {
          //   path: "/projects",
          //   Component: WorksPage,
          // },
          // {
          //   path: "/contact",
          //   Component: ContactPage,
          // },
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
