import { Link } from "react-router-dom";
import { ChangeEvent, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { searchedSubstring } from "./HeaderSlice";
import { ToggleTheme } from "../Theme/ToggleTheme";
import { debounce } from "lodash";
import "./header.scss";

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
        <ul className="list-reset header__list">
          <li className="header__list-item">
            <Link to={"/"} className={`header__logo-link ${theme}`}></Link>
          </li>
          <li className="header__list-item">
            <ToggleTheme />
          </li>
        </ul>
        <div className="header__search-bar-wrapper">
          <div className="header__search-bar">
            <input
              className={`header__input-search ${theme}`}
              type="text"
              onChange={handleChange}
              value={inputText}
            />
            {!inputText && (
              <span className={`placeholder-text ${theme}`}>
                Painting title
              </span>
            )}
            <span className={`search-icon ${theme}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
