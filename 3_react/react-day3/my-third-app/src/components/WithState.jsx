import { useEffect, useState } from "react";

export default function WithState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const increment2 = () => {
    setCount2((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("count만 변경!");
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>증가!</button>
      <p>{count2}</p>
      <button onClick={increment2}>증가!</button>
    </>
  );
}
