import styled from 'styled-components';

export const Box = styled.div`
  background-color: #a9bec3;
  padding: 8px 16px 0px;
  width: 716px;
  height: 48px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 684px;
`;

export const RigthContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  width: 200px;
`;

export const DivIconSms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: 56px;
  height: 40px;

  background: ${props => (props.active ? 'var(--background)' : 'var(--aba)')};
  /* background: var(--background); */
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
`;

export const DivEmail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: 56px;
  height: 40px;

  background: ${props => (props.active ? 'var(--background)' : 'var(--aba)')};
  border-radius: 8px 8px 0px 0px;

  cursor: pointer;
`;

export const DivDuration = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 19px;
  justify-content: center;
  width: 69px;
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  width: 138px;
`;

export const DivInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 19px;
  justify-content: center;
  /* width: 69px; */
`;
