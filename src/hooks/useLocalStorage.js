import { useState } from "react";

//set up state
const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
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
export default useLocalStorage;
