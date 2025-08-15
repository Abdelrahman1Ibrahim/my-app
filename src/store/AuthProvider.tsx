import { createContext, useState } from "react";

interface AuthContextType {
  isAusthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAusthenticated: false,
  login: () => {},
  logout: () => {}
});

export default function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function logout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }
  function login(token: string) {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  }

  const ctx = {
    isAusthenticated: isAuthenticated,
    login: login,
    logout: logout
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
