import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";
import '../Styles/navbar.css';

const Navbar = () => {
  const { state, toggleTheme } = useGlobalContext();
  const { theme } = state;

  const themeImage = theme === "dark" ? "/images/dark.png" : "/images/light.png";

  return (
    <nav className={`navbar navbar-${theme}`}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <button onClick={toggleTheme}>
        <img src={themeImage} alt="theme icon" />
      </button>
    </nav>
  );
};

export default Navbar;
