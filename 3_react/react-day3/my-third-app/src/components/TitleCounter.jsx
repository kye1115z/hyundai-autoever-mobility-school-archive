import { useEffect, useState } from "react";

export default function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `카운트: ${count}`;
    console.log("Changed Title~;");
  }, [count]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
