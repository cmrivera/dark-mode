import React, { useEffect } from "react";

import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = (e) => {
    e.preventDefault();
    if (darkMode === "light") {
      setDarkMode(!darkMode);
      //otherwise make lightMode
    } else {
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("darkMode");
    if (localMode) {
      setDarkMode(localMode);
    }
  }, [darkMode, setDarkMode]);

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
