import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLightMode } from "../hooks/useLightMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [lightMode, setLightMode] = useLightMode(false);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    //otherwise make lightMode
  };
  const toggleLight = (e) => {
    e.preventDefault();
    setLightMode(!lightMode);
  };
  /* useEffect(() => {
    const localMode = window.localStorage.getItem("darkMode");
    if (localMode) {
      setDarkMode(localMode);
    }
  }, [darkMode, setDarkMode]);*/

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
        <div
          onClick={toggleLight}
          className={lightMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};
export default Navbar;
