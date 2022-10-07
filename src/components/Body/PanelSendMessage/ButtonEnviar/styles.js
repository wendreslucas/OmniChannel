import styled from 'styled-components';

export const StyledButton = styled.button`
  background: var(--secondary);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 86px;
  height: 44px;

  &:hover {
    background: var(--secndaryHover);
    border: 1px solid var(--primary);
    cursor: pointer;
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
