import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isPos, setIsPos] = useState(true);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (count > 0) {
      setIsPos(true);
    } else {
      setIsPos(false);
    }
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={increaseCount}>증가</button>
      <button onClick={resetCount}>리셋</button>
      <button onClick={decreaseCount}>감소</button>
      <p>{isPos ? "양수입니다!" : "음수입니다!"}</p>
    </>
  );
}

export default Counter;
