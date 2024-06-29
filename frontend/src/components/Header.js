import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h1>
          <span style={{ color: "violet" }}>O</span>
          <span style={{ color: "gray" }}>doo</span>
        </h1>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
export default Header;
