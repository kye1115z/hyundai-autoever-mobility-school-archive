import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <button onClick={() => navigate("/")}></button>
    </div>
  );
}
