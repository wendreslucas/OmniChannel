import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 86px;
  height: 44px;
`;

export const TextButton = styled.span`
  color: ${props => props.color};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
`;
