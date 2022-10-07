import styled, { css } from 'styled-components';
import {
  TbMenu2,
  MdDescription,
  BsCalendar,
  BsCheck,
  IoMdCall,
  MdKeyboardArrowDown,
} from '../../styles/Icons';

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

  height: 50px;
  width: ${(props) => props.width};

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
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
  width: 49.78px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 50px;
  width: 216px;

  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerText = styled.div`
  height: 46px;
  width: 122px;
`;

export const IconStatus = styled.div`
  align-items: center;
  background: #27ae60;
  border-radius: 100%;
  border: 1.5px solid var(--primary);
  box-sizing: border-box;
  display: flex;
  height: 16.33px;
  position: absolute;
  width: 16.33px;
`;

const iconCss = css`
  color: var(--white);
  cursor: pointer;

  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuIcon = styled(TbMenu2)`
  font-size: 47px;
  color: var(--secondary);
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
export const ScriptIcon = styled(MdDescription)`
  ${iconCss};
  font-size: 22px;
`;
export const CalendarioIcon = styled(BsCalendar)`
  ${iconCss};
  font-size: 22px;
`;

export const CallIcon = styled(IoMdCall)`
  ${iconCss};
  font-size: 24px;
`;

export const CheckIcon = styled(BsCheck)`
  ${iconCss};
`;

export const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  ${iconCss};
  font-size: 22px;
`;
