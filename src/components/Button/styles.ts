import styled from 'styled-components';

export const Button = styled.button`
  height: 42px;
  width: 100%;
  padding: 0 16px;
  background-color: #0BBDBD;
  color: white;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 20px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    background-color: #000;
    cursor: not-allowed;
  }
`;
