const postList = document.getElementById("postList");
const loading = document.getElementById("loading");

// 게시글 가져오기
const fetchPosts = async () => {
  loading.style.display = "block";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("게시글 로드 실패");
    const data = await res.json();
    return data;
  } finally {
    loading.style.display = "none";
  }
};

// 유저 이름 가져오기
const fetchUserName = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data.username;
};

// 댓글 가져오기
const fetchComments = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return await res.json();
};

// 게시글 10개 출력
async function showTenPosts() {
  const posts = await fetchPosts();
  const tenPosts = posts.slice(0, 10);

  for (const post of tenPosts) {
    const postEl = document.createElement("div");
    postEl.className = "post";

    const username = await fetchUserName(post.userId);

    postEl.innerHTML = `
      <div class="post-header">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-author">${username}</p>
      </div>
      <p class="post-body">${post.body}</p>
    `;

    postEl.addEventListener("click", () => {
      showComments(post.id, postEl);
    });

    postList.appendChild(postEl);
  }
}

// 댓글 표시
async function showComments(postId, postBox) {
  // 이미 댓글 있으면 토글
  //   const existing = postBox.querySelector(".comments");
  //   if (existing) {
  //     existing.remove();
  //     return;
  //   }

  const comments = await fetchComments(postId);

  const commentBox = document.createElement("div");
  commentBox.className = "comments";

  comments.forEach((comment) => {
    const commentEl = document.createElement("div");
    commentEl.className = "comment";
    commentEl.innerHTML = `
      <p><strong>${comment.name}</strong></p>
      <p class="comment-email">${comment.email}</p>
      <p class="comment-body">${comment.body}</p>
    `;
    commentBox.appendChild(commentEl);
  });

  postBox.appendChild(commentBox);
  console.log(postBox);
}

showTenPosts();
