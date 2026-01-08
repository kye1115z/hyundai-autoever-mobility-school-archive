import styled from "styled-components";

function StatCard({ icon, value, label }) {
  return (
    <StatCardBox>
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-label">{label}</p>
      </div>
    </StatCardBox>
  );
}

export default StatCard;

const StatCardBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  border: 1px solid #2a3344;
  border-radius: 12px;
  background: #1a1f29;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 133, 192, 0.3);
    border-color: #ff85c0;
  }

  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #c471f5 0%, #ff85c0 100%);
    border-radius: 12px;
    font-size: 2.5rem;
  }

  .stat-info {
    flex: 1;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff85c0;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 400;
    color: #8899a6;
  }
`;
