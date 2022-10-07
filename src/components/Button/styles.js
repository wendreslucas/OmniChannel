import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  height: 44px;
  width: 86px;

  transition: ease-in-out 0.2s;
  &:hover {
    background: var(--primaryHover);
    cursor: pointer;
  }

  &:active {
    background: #03303b;
  }
`;

export const TextButton = styled.span`
  color: ${(props) => props.color};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
`;
