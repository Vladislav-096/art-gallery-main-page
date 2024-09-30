import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const Layout = () => {

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};
