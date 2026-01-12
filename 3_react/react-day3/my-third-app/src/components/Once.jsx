import { useEffect, useState } from "react";

export default function Once() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("마운트 될 때 한 번만!");
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>증가!</button>
    </>
  );
}
