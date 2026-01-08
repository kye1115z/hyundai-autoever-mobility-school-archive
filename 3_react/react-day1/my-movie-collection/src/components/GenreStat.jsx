import styled from "styled-components";
import StatCard from "./StatCard";
import movies from "../data/movies";

function GenreStat() {
  const genreCount = movies.reduce((acc, movie) => {
    const { genre } = movie;

    acc[genre] = (acc[genre] || 0) + 1;

    return acc;
  }, {});

  return (
    <StatSection>
      <h2 className="section-title">장르별 통계</h2>
      <div className="stats-grid">
        {Object.entries(genreCount).map(([genre, count]) => (
          <StatCard key={genre} icon="🎬" value={`${count}개`} label={genre} />
        ))}
      </div>
    </StatSection>
  );
}
export default GenreStat;

const StatSection = styled.section`
  margin-bottom: 50px;

  .section-title {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #e1e8ed;
    font-weight: 600;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
`;
