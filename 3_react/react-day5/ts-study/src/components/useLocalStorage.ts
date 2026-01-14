import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initValue: string) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved || initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
