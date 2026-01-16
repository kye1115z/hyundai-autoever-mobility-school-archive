import { Link } from "react-router-dom";
import type { Post } from "../types/post";

const posts: Post[] = [
  {
    id: 1,
    title: "첫 번째 글 제목",
  },
  {
    id: 2,
    title: "두 번째 글 제목",
  },
];

export default function Home() {
  return (
    <div>
      <h1>홈 페이지입니다.</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <Link to={`/posts/${post.id}`} state={{ post }}>
            <h2>{post.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
