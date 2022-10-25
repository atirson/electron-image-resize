import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 150px;

  height: 100%;
  width: 100%;
  padding: 40px 20px;
  background-color: #e6e6e6;
  border-radius: 10px;

  margin-bottom: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const Text = styled.p`
  text-transform: uppercase;
  color: gray;
  font-size: 1rem;
`;

export const NameFile = styled.p`
  text-transform: uppercase;
  color: #008080;
  font-size: 0.85rem;
`;
