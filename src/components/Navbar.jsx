import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { darkTheme, lightMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [darkMode, togglearkMode] = darkTheme;
  const toggleMode = (e) => {
    e.preventDefault();
    if (darkMode === "light") {
      window.localStorage.setItem("darkMode", "dark");
      setDarkMode("dark");
      //otherwise make lightMode
    } else {
      window.localStorage.setItem("darkMode", "light");
      setDarkMode("light");
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("darkMode");
    if (localMode) {
      setDarkMode(localMode);
    }
  }, []);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
