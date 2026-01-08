import styled from "styled-components";
import recommended_movies from "../data/recommended_movies";
import MovieCard from "./MovieCard";

function RecommendedMovies() {
  return (
    <RecommendedList>
      <h2 className="section-title">추천 영화 목록</h2>
      <div className="movies-grid">
        {recommended_movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </RecommendedList>
  );
}

export default RecommendedMovies;

const RecommendedList = styled.div`
  margin-bottom: 50px;

  .section-title {
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: 600;
    color: #e1e8ed;
  }

  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0px;
    gap: 15px;
  }
`;
