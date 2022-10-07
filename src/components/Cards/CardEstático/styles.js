import styled, { css } from 'styled-components';
import { MdOutlineEmail, FaWhatsapp } from '../../../styles/Icons';

export const Container = styled.div`
  align-items: center;
  border-image-slice: 1;
  border-width: 2px;
  border-radius: 8px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 8px 16px 8px 16px;
  margin-bottom: 8px;
  width: 346px;

  border: 2px solid var(--primary);
  &:hover {
    cursor: pointer;
  }
`;

export const DivUser = styled.div`
  align-items: center;
  display: flex;
`;

export const UserImage = styled.img`
  border-radius: 100px;
  height: 44px;
  margin-right: 8px;
  width: 44px;
`;

export const UserName = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 85px; */
  width: ${(props) => (props.active ? '85px' : '110px')};
`;

export const DateTime = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const iconCss = css`
  color: var(--primary);
  font-size: 24px;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${iconCss}
  color: var(--primary);
`;

export const EmailIcon = styled(MdOutlineEmail)`
  ${iconCss}
`;
