import styled from 'styled-components';

export const Container = styled.header`
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
  gap: 26px;

  width: 1230px;
  height: 50px;
`;

export const ContainerOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  width: ${props => props.width};
  height: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const DivImagem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  height: 50px;
  width: 50px;
`;

export const Imagem = styled.img`
  border-radius: 100px;
  border: 1px solid var(--secondary);
  height: 49.78px;
  /* margin-right: 8px; */
  width: 49.78px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  width: 216px;
  height: 50px;

  /* flex: none;
  order: 3;
  flex-grow: 0; */
`;

export const ContainerText = styled.div`
  height: 46px;
  width: 122px;
`;

export const IconStatus = styled.div`
  display: flex;
  align-items: center;
  border-radius: 100%;
  height: 16.33px;
  width: 16.33px;
  box-sizing: border-box;

  position: absolute;

  /* left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%; */

  /* Colors/Status/Success */

  background: #27ae60;
  /* Colors/Primary */

  border: 1.5px solid #03303b;
`;
