import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 280px;

  background: #ffffff;
  /* Shadow 1 */

  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

export const ContainerAtendimento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 8px;

  width: 280px;
  height: 372px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
