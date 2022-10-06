import styled, { css } from 'styled-components';
import { IoMdCalendar, MdPowerSettingsNew } from '../../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 10px;
  width: 216px;
  height: 122px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ButtonAgendar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 216px;
  height: 44px;

  border: 1px solid var(--primary);
  border-radius: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  transition: ease-in-out 0.2s;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      var(--primary);
    cursor: pointer;
  }

  &:active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      var(--primary);
    border-radius: 8px;
  }
`;

export const Span = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: var(--primary);

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const ButtonFinalizar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 211px;
  height: 44px;

  background: var(--secondary);
  border-radius: 8px;
  cursor: pointer;
  flex: none;
  order: 1;
  flex-grow: 0;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 0.7;
    border: 1px solid var(--primary);
    border-radius: 8px;
  }
`;

const iconCss = css`
  flex-shrink: 0;
  font-size: 22px;
  color: var(--primary);
`;

export const CalendarIcon = styled(IoMdCalendar)`
  ${iconCss}
`;
export const PowerIcon = styled(MdPowerSettingsNew)`
  ${iconCss}
`;
