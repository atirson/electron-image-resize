import styled from 'styled-components';

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background-color: #e6e6e6;
  font-size: 1rem;
  color: #000;
  outline: none;
  
  &::placeholder {
    color: #999;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;
