import { RouterProvider } from "react-router";
import router from "./routes/index";
import ThemeProvider from "./store/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
