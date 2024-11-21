import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

import App from "./App";
import Layout from "./components/Layout";
import RoadMap from "./pages/RoadMap";
import SignIn from "./pages/SignIn";
import Explorer from "./pages/Explorer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/roadmap",
    element: <RoadMap />,
  },
  {
    path: "/auth",
    element: <SignIn />,
  },
  {
    path: "/explore",
    element: <Explorer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
