import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-bottom: 40px;
  justify-content: space-between;
  `;
  
export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color:  #ebf5fc;
 
  `;
 
export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: #6a9bd8;
  }
`;



export const MovieName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  transition: all 200ms ease-in-out;
`;

