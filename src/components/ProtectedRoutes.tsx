import { useContext, ReactNode } from "react";
import { AuthContext } from "../store/AuthProvider";
import { Navigate } from "react-router";
import AppShell from "../layouts/AppShell/AppShell";

interface ProtectedRoutesProps {
  replace: boolean;
  route: string;
  children: ReactNode;
}

export default function ProtectedRoutes({
  replace,
  route,
  children
}: ProtectedRoutesProps) {
  const { isAusthenticated } = useContext(AuthContext);

  if (!isAusthenticated) {
    return <Navigate to={route} replace={replace} />;
  }

  return <AppShell>{children}</AppShell>;
}
