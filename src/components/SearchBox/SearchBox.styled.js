import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 13px 20px;
  width: 300px;
  border-radius: 4px;

  font-size: 18px;
  color: #858585;

 
  border: 1px solid;

  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

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
