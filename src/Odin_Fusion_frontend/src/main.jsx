import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./index.scss";

import App from "./App";
import RoadMap from "./pages/RoadMap";
import SignIn from "./pages/SignIn";
import Explorer from "./pages/Explorer";
import AuthTrial from "./components/AuthTrial";
import { AuthProvider } from "./auth/use-auth-client";
import { AgentProvider } from "@ic-reactor/react";

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
    <Provider store={store}>
      {" "}
      <AgentProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AgentProvider>
    </Provider>
  </React.StrictMode>
);
