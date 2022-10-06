import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 0px 0px;

  width: 280px;
  height: 555px;

  background: #f4fbfa;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px 10px 32px;
  gap: 16px;

  width: 264px;
  height: 504px;

  background: var(--white);

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 216px;
  height: 48px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Divider = styled.div`
  border: 0;
  border-bottom: 1px solid var(--secondary);

  margin: 26px 0 26px 0;
  width: 216px;
`;
