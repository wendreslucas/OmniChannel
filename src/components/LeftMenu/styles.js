import styled from 'styled-components';

export const Container = styled.aside`
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 8px 32px;
  height: 86.5vh;
  width: 410px;
`;

export const SubDivision = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid var(--secondary);
  width: 420px;
`;
