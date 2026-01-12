import { useEffect } from "react";

export default function SetIntervalCleanUp() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("째깍");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머도 정리되고 언마운트도 됨!");
    };
  }, []);

  return (
    <>
      <p>SetInterval 컴포넌트</p>
    </>
  );
}
