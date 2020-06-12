import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useLightMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(key);

  const handleChange = (newValue) => {
    setStoredValue(newValue);
  };
  useEffect(() => {
    return storedValue
      ? window.document.body.classList.add("light-mode")
      : window.document.body.classList.remove("light-mode");
  }, [storedValue]);

  return [storedValue, setStoredValue, handleChange];
};
