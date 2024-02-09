import { useEffect, useState } from "react";

export const useLocalStorage = (storeKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storeKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(value));
  }, [value, storeKey]);

  return [value, setValue];
};
