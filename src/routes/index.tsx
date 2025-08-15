import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import MyTasks from "../pages/Tasks/MyTasks/MyTasks";
import TaskCategory from "../pages/Tasks/TaskCategory/TaskCategory";
import MyProfile from "../pages/MyProfile/MyProfile";
import ProtectedRoutes from "../components/ProtectedRoutes";

import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes replace={true} route="/login">
            <Home />
          </ProtectedRoutes>
        )
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes replace={true} route="/profile">
            <MyProfile />
          </ProtectedRoutes>
        )
      }
    ]
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
  },
  {
    path: "/tasks",
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes replace={true} route="/tasks">
            <MyTasks />
          </ProtectedRoutes>
        )
      },
      {
        path: "taskCategory",
        element: (
          <ProtectedRoutes replace={true} route="/tasks">
            <TaskCategory />
          </ProtectedRoutes>
        )
      }
    ]
  }
]);

export default router;
