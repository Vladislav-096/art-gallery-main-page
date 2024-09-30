import { useEffect } from "react";
import { Layout } from "./components/Layout.tsx/Layout";
import { useAppSelector } from "./hooks/hooks";
import "./index.css";

export function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <Layout />;
}
