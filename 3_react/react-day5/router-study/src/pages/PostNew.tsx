import { useNavigate } from "react-router-dom";
import type { NewPost } from "../types/post";
import { useState } from "react";

export default function PostNew() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<NewPost>({
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle({ title: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>글쓰기 화면입니다.</h1>
        <input type="text" value={title.title} onChange={handleChange} />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
