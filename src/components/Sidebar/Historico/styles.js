import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px 0px 0px;

  width: 280px;
  height: 555px;

  /* Colors/Base/Background */

  background: #f4fbfa;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;
