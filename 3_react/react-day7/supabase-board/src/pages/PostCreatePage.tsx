import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";

function PostCreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // for mutation, why? needed update

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        required
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        작성
      </button>
    </form>
  );
}

export default PostCreatePage;
