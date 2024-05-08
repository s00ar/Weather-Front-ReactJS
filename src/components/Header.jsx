import React, { useContext } from 'react';
import '../styles/Header.scss';
import wcanvasLogo from '../assets/logowhitecanvas.svg';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

  const Header = ({ onToggleTheme }) => { // Receive toggleTheme function as prop

  return (
    <header className="header">
      <img
        src={wcanvasLogo}
        alt="React Logo"
        className={darkTheme ? 'header__logo--inverted' : 'header__logo'} // Ternary operator
      />
      <button onClick={onToggleTheme}>🌙/☀</button>
    </header>
  );
};

export default Header;