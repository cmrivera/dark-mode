import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);

  useEffect(() => {
    return darkMode === false
      ? () => {
          document.body.className = "dark-mode";
        }
      : () => {
          document.body.className = null;
        };
  }, [darkMode, setDarkMode]);

  return [darkMode, setDarkMode];
};
