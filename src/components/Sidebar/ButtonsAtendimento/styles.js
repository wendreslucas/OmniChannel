import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 10px;

  width: 216px;
  height: 122px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ButtonAgendar = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 216px;
  height: 44px;

  /* Colors/Primary */

  border: 1px solid #03303b;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  cursor: pointer;
`;

export const Span = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #03303b;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ButtonFinalizar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 211px;
  height: 44px;

  /* Colors/Secondary */

  background: #a2d6d3;
  border-radius: 8px;

  cursor: pointer;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
