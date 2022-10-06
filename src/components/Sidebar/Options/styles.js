import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;

  width: 264px;
  height: 43px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const StyledSpan = styled.span`
  border-bottom: ${props => (props.active ? '1px solid var(--primary)' : '')};

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  padding-bottom: 11px;

  display: flex;
  align-items: center;

  color: var(--primary);

  flex: none;
  order: 0;
  flex-grow: 0;
`;
