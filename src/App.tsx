import "./styles/fonts.scss";
import "./styles/common.scss";

import { useEffect } from "react";
import { Layout } from "./components/Layout.tsx/Layout";
import { useAppSelector } from "./hooks/hooks";

export function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
    document.body.setAttribute("data-theme", theme); // for antd customization
  }, [theme]);

  return <Layout />;
}
