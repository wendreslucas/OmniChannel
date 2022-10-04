import styled from 'styled-components';

export const Container = styled.aside`
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 8px 32px;
  /*  */
  width: 410px;

  height: 86.5vh;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 68vh;
  max-height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.1rem;
    display: none;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const SubDivision = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid var(--secondary);
  /* width: 420px; */
  width: ${props => props.width};
`;

export const Div = styled.div`
  display: flex;
`;
