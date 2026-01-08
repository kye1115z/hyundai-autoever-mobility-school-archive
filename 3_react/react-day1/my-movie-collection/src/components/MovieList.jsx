import styled from "styled-components";
import MovieCard from "./MovieCard";
import FilterButton from "./FilterButton";
import movies from "../data/movies";

function MovieList() {
  return (
    <MovieListSection>
      <h2 className="section-title">내 영화 목록</h2>
      <div className="filter-buttons">
        <FilterButton label="전체" active={true} />
        <FilterButton label="시청 완료" active={false} />
        <FilterButton label="보고 싶어요" active={false} />
      </div>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </MovieListSection>
  );
}

export default MovieList;

const MovieListSection = styled.section`
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
    margin-bottom: 30px;
    gap: 15px;
  }
`;
