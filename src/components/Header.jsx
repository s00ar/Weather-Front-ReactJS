import React from 'react';
import '../styles/Header.scss';
import wcanvasLogo from '../assets/logowhitecanvas.svg'

const Header = () => {
  return (
    <header className="header">
      <img 
        src={wcanvasLogo} 
        alt="React Logo" 
        className='header__logo'/>
    </header>
  );
};

export default Header;

// import React, { useContext } from 'react';
// import '../styles/Header.scss';
// import wcanvasLogo from '../assets/logowhitecanvas.svg';
// import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

// const Header = () => {
//   const { darkTheme } = useContext(ThemeContext); // Access darkTheme from context

//   return (
//     <header className="header">
//       <img
//         src={wcanvasLogo}
//         alt="React Logo"
//         className={darkTheme ? 'header__logo--inverted' : 'header__logo'} // Ternary operator
//       />
//     </header>
//   );
// };

// export default Header;