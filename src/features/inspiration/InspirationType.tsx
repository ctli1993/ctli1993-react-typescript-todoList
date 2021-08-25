import styled from "styled-components";

interface InspirationTypeProps {
  onClick: () => void;
  inspirationType: string;
  selectedInspirationType: string;
}

const InspirationType = ({
  onClick,
  inspirationType,
  selectedInspirationType,
}: InspirationTypeProps) => {
  return (
    <Button
      isBgHilight={selectedInspirationType === inspirationType}
      onClick={onClick}
    >
      {inspirationType}
    </Button>
  );
};

export default InspirationType;

const Button = styled.button<{ isBgHilight: boolean }>`
  color: ${({ theme }) => theme.colors.darkGreen};
  background-color: ${({ theme, isBgHilight }) =>
    isBgHilight ? theme.colors.lightGreen : theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.darkGreen}`};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 12px;
  margin: 5px 8px;
  width: 150px;
  &:hover {
    color: ${({ theme }) => theme.colors.darkOrange};
    background-color: ${({ theme, isBgHilight }) =>
      isBgHilight ? theme.colors.orange : theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.darkOrange}`};
  }
`;
