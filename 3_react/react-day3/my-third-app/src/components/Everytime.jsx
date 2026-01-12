import { useEffect, useState } from "react";

export default function Everytime() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("everytime 렌더링");
  });

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>증가!</button>
    </>
  );
}
