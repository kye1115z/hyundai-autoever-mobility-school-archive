import styled from "styled-components";

function GenreBadge({ genre }) {
  const getGenreColor = (genre) => {
    const color = {
      SF: "#667eea",
      드라마: "#f093fb",
      스릴러: "#e55d87",
      액션: "#4facfe",
      코미디: "#43e97b",
      로맨스: "#fa709a",
    };
    return color[genre] || "#667eea";
  };

  const backgroundColor = getGenreColor(genre);

  return <GenreBadgeSpan style={{ backgroundColor }}>{genre}</GenreBadgeSpan>;
}

export default GenreBadge;

const GenreBadgeSpan = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
`;
