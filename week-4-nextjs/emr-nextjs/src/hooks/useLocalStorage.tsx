import { useEffect, useState } from "react";

function getSavedValue<T>(key: string, initialValue: T | (() => T)): T {
  const saved = localStorage.getItem(key);

  if (saved !== null) return JSON.parse(saved) as T;

  return initialValue instanceof Function ? initialValue() : initialValue;
}

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() =>
    getSavedValue<T>(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
