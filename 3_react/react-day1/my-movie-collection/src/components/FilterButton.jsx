import styled from "styled-components";

function FilterButton({ label, active }) {
  return <Button $active={active}>{label}</Button>;
}

export default FilterButton;

const Button = styled.button`
  padding: 12px 24px;
  background: #1a1f29;
  border: 2px solid #2a3344;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #8899a6;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #ff85c0;
    color: #ff85c0;
    transform: translateY(-2px);
  }

  ${({ $active }) =>
    $active &&
    `
        background: linear-gradient(135deg, #c471f5 0%, #ff85c0 100%);
        border-color: #ff85c0;
        box-shadow: 0 6px 20px rgba(255, 133, 192, 0.45);
        color: white;
        
        &:hover {
          color: white;
        }
    `}
`;
