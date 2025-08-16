import { RouterProvider } from "react-router";
import router from "./routes/index";
import ThemeProvider from "./store/ThemeProvider";
import { SidebarProvider } from "./store/SidebarContext";

localStorage.removeItem("token");

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  );
}
