import styled from 'styled-components';

export const Container = styled.aside`
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 8px 32px;
  width: 410px;
  height: 927px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 98vh;
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

export const Divider = styled.div`
  border: 0;
  border-bottom: 1px solid var(--secondary);
  width: ${props => props.width};
`;

export const Div = styled.div`
  display: flex;
`;

export const ContainerSubtitle = styled.div`
  height: 20px;
  margin-bottom: 8px;

  padding: 15px 8px;
  /* width: 145px; */
`;
