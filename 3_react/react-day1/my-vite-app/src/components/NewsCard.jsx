function NewsCard({ title, author, date, summary }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>작성자: {author}</p>
      <p>작성일: {date}</p>
      <p>{summary}</p>
    </div>
  );
}

export default NewsCard;
