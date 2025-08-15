import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";

import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes replace={true} route="/login">
        <Home />
      </ProtectedRoutes>
    )
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);

export default router;
