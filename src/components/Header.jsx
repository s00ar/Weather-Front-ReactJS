import React, { useContext } from "react";
import wcanvasLogo from "../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Redux/Slices/darkMode";
import "../styles/Header.scss";

const Header = () => {
  const { mode } = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  return (
    <header className="header absolute">
      <button onClick={() => dispatch(toggleDarkMode())}>
        <img
          src={wcanvasLogo}
          alt="React Logo"
          className={mode ? "header__logo--inverted" : "header__logo"}
          style={{ marginRight: "30px",marginLeft: "30px", scale: "2" }}
        />
      </button>
    </header>
  );
};

export default Header;
