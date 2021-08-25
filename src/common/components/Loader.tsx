import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${({ theme }) => `1px solid ${theme.colors.darkGreen}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.darkGreen}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.darkGreen}`};
  border-left: ${({ theme }) => `3px solid ${theme.colors.darkGreen}`};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Loader;
