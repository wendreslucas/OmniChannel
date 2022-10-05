import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 216px;
  height: 178px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Aling = styled.div`
  align-items: center;
  display: flex;
`;

export const Value = styled.span`
  width: 181px;
  height: 20px;
  padding-left: 8px;

  /* Small Text Regular */

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 140% */

  display: flex;
  align-items: center;

  /* Gray */

  color: #767676;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`;
