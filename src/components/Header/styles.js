import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  gap: 28px;
  height: 96px;
  justify-content: space-between;
  max-width: 2560px;
  padding: 24px 32px;
`;

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 122px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 1230px;
  height: 50px;
`;

export const Imagem = styled.img`
  border-radius: 100px;
  height: 50px;
  margin-right: 8px;
  width: 50px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 198px;
  height: 50px;
`;

export const ContainerText = styled.div`
  width: 122px;
`;
