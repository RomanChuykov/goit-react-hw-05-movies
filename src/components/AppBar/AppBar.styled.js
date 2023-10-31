import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #ebf5fc;
  box-shadow: var(--main-shadow);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 4px;

  transition: all 200ms ease-in-out;

  &.active {
    color: #ebf5fc;
    background-color: #6a9bd8;
    
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #6a9bd8;
  }

  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;
