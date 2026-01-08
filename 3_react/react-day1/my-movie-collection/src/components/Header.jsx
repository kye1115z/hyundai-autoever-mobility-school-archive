import styled from "styled-components";

function Header() {
  return (
    <HeaderEl>
      <div className="header-content">
        <h1 className="header-title">Yeni's Movie Collection</h1>
        <p className="header-subtitle">나만의 영화 컬렉션</p>
      </div>
    </HeaderEl>
  );
}

export default Header;

const HeaderEl = styled.header`
  margin-bottom: 40px;
  padding: 60px 40px;
  text-align: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #c471f5 0%, #ff85c0 100%);
  box-shadow: 0 6px 25px rgba(255, 117, 140, 0.45);

  .header-content {
    margin: 0 auto;
    max-width: 800px;
  }

  .header-title {
    margin-bottom: 12px;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .header-subtitle {
    font-size: 1.2rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
  }
`;
