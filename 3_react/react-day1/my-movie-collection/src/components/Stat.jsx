import styled from "styled-components";
import StatCard from "./StatCard";

function Stat() {
  return (
    <StatSection>
      <h2 className="section-title">통계</h2>
      <div className="stats-grid">
        <StatCard icon="🎬" value={12} label="총 영화 수" />
        <StatCard icon="✅" value={8} label="시청 완료" />
        <StatCard icon="⏱️" value={4} label="보고 싶어요" />
      </div>
    </StatSection>
  );
}
export default Stat;

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
