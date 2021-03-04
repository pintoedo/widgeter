import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <Title to="/" as={Link}>
        WIDGETR
      </Title>
      <NavButtons>
        <StyledLink to="/add" as={Link}>
          Add widget +
        </StyledLink>
      </NavButtons>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 0 0 0 20px;
`;

const Title = styled.a`
  flex-direction: row;
  text-align: center;
  padding: 14px 16px;
  font-size: 22px;
  font-weight: 900;
  text-decoration: none;
  color: black;
`;

const NavButtons = styled.div`
  padding: 14px 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  flex-direction: row;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  font-weight: 800;
  color: black;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  & > icon {
    display: none;
  }
`;

export default Navbar;
