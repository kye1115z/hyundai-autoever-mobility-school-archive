import { useEffect } from "react";

export default function SetInterval() {
  useEffect(() => {
    setInterval(() => {
      console.log("째깍");
    }, 1000);
  }, []);

  return (
    <>
      <p>SetInterval 컴포넌트</p>
    </>
  );
}
