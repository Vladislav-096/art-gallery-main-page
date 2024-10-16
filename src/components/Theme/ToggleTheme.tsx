import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleTheme } from "./ThemeSlice";
import "./ToggleTheme.scss";

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button
        className={`btn-reset btn-toggle ${theme}`}
        onClick={handleToggleTheme}
      ></button>
    </div>
  );
};
