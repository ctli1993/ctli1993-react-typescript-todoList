import styled from "styled-components";

const AddTodoButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
  border: 4px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  width: 90px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

export default AddTodoButton;
