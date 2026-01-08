import styled from "styled-components";

function RatingStars({ rating }) {
  const ratingNum = parseFloat(rating);
  const fullStars = Math.floor(ratingNum / 2);
  const hasHalfStar = ratingNum % 2 >= 1;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push("⭐️");
  }

  if (hasHalfStar) {
    stars.push("☆");
  }

  return (
    <RatingStarBox>
      <span className="stars">{stars.join("")}</span>
      <span className="rating-number">{rating}</span>
    </RatingStarBox>
  );
}

export default RatingStars;

const RatingStarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 8px 15px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  .stars {
    font-size: 1rem;
  }

  .rating-number {
    font-size: 0.95rem;
    font-weight: 600;
    color: #ffd700;
  }
`;
