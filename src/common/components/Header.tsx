import { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";

const Header: FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Category> 📒 Write To-dos </Category>
      </Link>

      <Link to="/inspiration">
        <Category> 💡 Get Inspirations </Category>
      </Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  padding-top: 20px;
  align-items: center;
`;

const Category = styled.div`
  margin: 0 40px;
  font-size: 25px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.main};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGray};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
