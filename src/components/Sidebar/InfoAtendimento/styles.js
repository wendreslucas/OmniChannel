import styled, { css } from 'styled-components';
import { MdEmail, IoMdCall, FaWhatsapp } from '../../../styles/Icons';

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
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #767676;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const iconCss = css`
  flex-shrink: 0;
  font-size: 28px;
  color: var(--primary);
`;

export const EmailIcon = styled(MdEmail)`
  ${iconCss}
`;

export const CallIcon = styled(IoMdCall)`
  ${iconCss}
`;
export const WhatsappIcon = styled(FaWhatsapp)`
  ${iconCss}
`;
