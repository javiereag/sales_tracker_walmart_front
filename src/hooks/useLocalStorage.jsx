import { useState, useEffect } from "react";

const storageEvent = new Event("localStorageChange");

export function useLocalStorage(key, initialValue) {
  const getStorageValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };
  const [storedValue, setStoredValue] = useState(getStorageValue);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(storageEvent);
      }
    } catch (error) {
      console.error("Error with the key");
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(getStorageValue());
    };
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("localStorageChange", handleStorageChange);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener("localStorageChange", handleStorageChange);
      }
    };
  }, []);
  return [storedValue, setValue];
}
