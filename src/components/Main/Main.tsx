import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
};
