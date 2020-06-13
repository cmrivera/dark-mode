import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(key);

  const handleChange = (newValue) => {
    setStoredValue(newValue);
  };
  useEffect(() => {
    return storedValue
      ? window.document.body.classList.add("dark-mode")
      : window.document.body.classList.remove("dark-mode");
  }, [storedValue]);

  return [storedValue, setStoredValue, handleChange];
};
