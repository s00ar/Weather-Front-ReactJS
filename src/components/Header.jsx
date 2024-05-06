import React from 'react';
import '../styles/Header.scss';
import wcanvasLogo from '../assets/logowhitecanvas.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={wcanvasLogo} alt="React Logo" className='header__logo'/>
    </header>
  );
};

export default Header;
