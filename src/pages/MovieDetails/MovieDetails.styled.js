import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: #6a9bd8;
  background-color: #ebf5fc;
  
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus-visible {
    color: #ebf5fc;
    background-color: #6a9bd8;
  }

  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: #6a9bd8;
  background-color: #ebf5fc;
  

  transition: all 200ms ease-in-out;
  cursor: pointer;

  &.active {
    color: #ebf5fc;
    background-color: #6a9bd8;
    
  }

  :hover,
  :focus-visible {
    color: #ebf5fc;
    background-color: #6a9bd8;
  }

  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;
