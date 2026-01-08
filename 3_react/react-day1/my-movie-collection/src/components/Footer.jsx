import styled from "styled-components";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterBox>
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Yeni's Movie Collection
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            GitHub
          </a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">
            Email
          </a>
          <span className="footer-divider">•</span>
          <a href="#" className="footer-link">
            Portfolio
          </a>
        </div>
      </div>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.footer`
  margin-top: 60px;
  padding: 40px;
  background: #1a1f29;
  border: 1px solid #2a3344;
  border-radius: 12px;

  .footer-content {
    text-align: center;
  }

  .footer-text {
    margin-bottom: 20px;
    font-size: 1rem;
    color: #8899a6;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .footer-link {
    font-size: 0.95rem;
    color: #ff85c0;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-link:hover {
    color: #c471f5;
    text-decoration: underline;
  }

  .footer-divider {
    padding: 0 10px;
    color: #8899a6;
  }
`;
