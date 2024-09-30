import LightThemeButtoPicture from "../../assets/toggle-light.svg";
import DarkThemeButtoPicture from "../../assets/toggle-dark.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleTheme } from "./ThemeSlice";
import '../../index.css'
import "./style.css";

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button className="btn-reset btn-toggle" onClick={handleToggleTheme}>
        {/* Когда смогу в препроцессоры - сделать в css чере переменные, чтобы плавно менялось */}
        <img
          className="toggle-picture"
          src={
            theme === "dark" ? DarkThemeButtoPicture : LightThemeButtoPicture
          }
          alt="Theme switch button"
        />
      </button>
    </div>
  );
};
