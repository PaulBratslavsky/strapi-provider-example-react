import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./root";

import PrivateRoutes,  { loader as authLoader } from "./private-routes";

import ErrorPage from "./error-page";
import LoginRedirect from "./login-redirect";
import { Dashboard } from "./views/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/connect/:providerName/redirect",
    element: <LoginRedirect />,
  },
  {
    element: <PrivateRoutes />,
    loader: authLoader,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
