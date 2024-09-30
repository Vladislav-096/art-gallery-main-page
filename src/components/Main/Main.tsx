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

// [
//   {
//     authorId: 1,
//     created: "1850",
//     id: 1,
//     imageUrl: "/images/The_ninth_wave.jpeg",
//     locationId: 1,
//     name: "The ninth wave",
//   },
//   {
//     authorId: 2,
//     created: "1747",
//     id: 2,
//     imageUrl: "/images/L_Enlevement_d_Europe.jpeg",
//     locationId: 2,
//     name: "L`Enlévement d`Europe",
//   },
// ];
