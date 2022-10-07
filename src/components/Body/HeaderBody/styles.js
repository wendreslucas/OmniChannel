import styled, { css } from 'styled-components';
import {
  FaWhatsapp,
  MdOutlineEmail,
  MdOutlineSearch,
} from '../../../styles/Icons';

export const Box = styled.div`
  background-color: #a9bec4;
  height: 48px;
  padding: 8px 16px 0px;
  width: 716px;
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
  align-items: center;
  background: ${(props) => (props.active ? 'var(--background)' : 'var(--aba)')};
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 8px 16px;

  width: 56px;
  height: 40px;

  transition: ease-in-out 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const DivEmail = styled.div`
  align-items: center;
  background: ${(props) => (props.active ? 'var(--background)' : 'var(--aba)')};
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  padding: 8px 16px;

  height: 40px;
  width: 56px;

  transition: ease-in-out 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
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

  width: 145px;
`;

export const DivInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 19px;
  justify-content: center;
`;

const iconCss = css`
  flex-shrink: 0;
  font-size: 22px;
  color: var(--primary);
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${iconCss}
`;
export const EmailIcon = styled(MdOutlineEmail)`
  ${iconCss}
`;

export const SearchIcon = styled(MdOutlineSearch)`
  ${iconCss}
  transition: ease-in-out 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
