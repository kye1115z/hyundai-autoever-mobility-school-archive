import styled from "styled-components";
import GenreBadge from "./GenreBadge";
import RatingStars from "./RatingStars";

function MovieCard({
  poster,
  title,
  genre,
  rating,
  description,
  watched,
  director,
  runtime,
  quote,
  country,
  releaseDate,
  cast,
}) {
  return (
    <MovieCardBox>
      <MoviePoster>
        <img src={poster} alt={title} />
        <RatingStars rating={rating} />
      </MoviePoster>
      <MovieInfo>
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">
          {releaseDate} • {country}
        </p>
        <p className="movie-desc" style={{ margin: "10px 0px" }}>
          {director} • {runtime}분
        </p>
        <p
          className="movie-desc"
          style={{ fontStyle: "italic", margin: "10px 0px" }}
        >
          "{quote}"
        </p>
        {cast && <p className="movie-desc">출연: {cast.join(", ")}</p>}
        <GenreBadge genre={genre} />
        <p className="movie-desc">{description}</p>
        <div className={`movie-status ${watched ? "watched" : "wishlist"}`}>
          {watched ? "✅ 시청 완료" : "⏱️ 보고 싶어요"}
        </div>
      </MovieInfo>
    </MovieCardBox>
  );
}

export default MovieCard;

const MovieCardBox = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #2a3344;
  background-color: #1a1f29;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff85c0;
    box-shadow: 0 12px 30px rgba(255, 133, 192, 0.45);
    transform: translateY(-8px);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const MoviePoster = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #0f1419;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .movie-rating {
    padding: 8px 15px;
    position: absolute;
    top: 15px;
    right: 15px;
    color: #ffd700;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }
`;

const MovieInfo = styled.div`
  padding: 25px;

  .movie-title {
    margin-bottom: 8px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #e1e8ed;
  }

  .movie-year {
    margin-bottom: 12px;
    font-size: 0.95rem;
    color: #8899a6;
  }

  .movie-genre {
    display: inline-block;
    margin-bottom: 15px;
    padding: 6px 14px;
    background: #ff85c0;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    color: white;
  }

  .movie-desc {
    margin-bottom: 20px;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #8899a6;
  }

  .movie-status {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .movie-status.watched {
    background: rgba(255, 133, 192, 0.2);
    border: 1px solid #ff85c0;
    color: #ff85c0;
  }

  .movie-status.wishlist {
    background: rgba(255, 173, 31, 0.2);
    border: 1px solid #ffad1f;
    color: #ffad1f;

    /* background: rgba(196, 113, 245, 0.15);
    border: 1px solid #c471f5;
    color: #c471f5; */
  }
`;
