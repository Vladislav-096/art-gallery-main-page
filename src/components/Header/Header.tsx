import { Link } from "react-router-dom";
import DarkThemeLogo from "../../assets/dark-theme-logo.svg";
import LightThemeLogo from "../../assets/light-theme-logo.svg";
import SearchIcon from "../../assets/search-icon.svg";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { searchedSubstring } from "./HeaderSlice";
import { ToggleTheme } from "../Theme/ToggleTheme";
import "../../index.css";
import "./style.css";
import { debounce } from "lodash";

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const [inputText, setInputText] = useState("");

  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(searchedSubstring(value));
    }, 400),
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputText(value);
    debouncedSearch(value);
  };

  return (
    <header className="header">
      <div className="container">
        <ul className="list-reset header-list">
          <li className="header-list-item">
            <Link to={"/"} className="logo-link">
              <img
                src={theme === "dark" ? DarkThemeLogo : LightThemeLogo}
                alt="Logo"
              />
            </Link>
          </li>
          <li className="header-list-item">
            <ToggleTheme />
          </li>
        </ul>
        <div className="search-bar-wrapper">
          <div className="search-bar">
            <input
              className={
                theme === "light"
                  ? "input-search input-search-light"
                  : "input-search"
              }
              type="text"
              onChange={handleChange}
              value={inputText}
            />
            {!inputText && (
              <span className="placeholder-text">Painting title</span>
            )}
            <img className="search-icon" src={SearchIcon} alt="Search icon" />
          </div>
        </div>
      </div>
    </header>
  );
};
