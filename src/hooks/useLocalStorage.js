import { useState } from "react";

//set up state
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const holdValue = window.localStorage.getItem(key);
    return holdValue ? JSON.parse(holdValue) : initialValue;
  });
  //capture values
  //if localStorage data, use that, if not then use initialValues
  //update local storage when needed
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
