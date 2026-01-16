import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link to={"/"}>홈</Link>
        <Link to={"/posts/new"}>글쓰기</Link>
      </div>
    </nav>
  );
}
