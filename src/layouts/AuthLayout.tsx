import { Outlet } from "react-router";
import AuthHeader from "./AuthHeader/AuthHeader";
export default function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}
