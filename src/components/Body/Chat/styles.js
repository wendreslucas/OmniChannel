import styled from 'styled-components';

export const Container = styled.div`
  /* height: 771px; */
`;

export const MessageList = styled.ul`
  align-items: flex-end;
  color: #c2d3d766;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  padding: 16px;
`;

export const UserMessage = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  margin-bottom: 16px;

  width: 490px;
  height: auto;

  background: rgba(194, 211, 215, 0.4);
  border-radius: 0px 8px 8px 8px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const User = styled.span`
  width: 408px;
  height: 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: var(--gray3);
`;

export const BoxMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 458px;
`;

export const TextMessageUser = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  display: flex;
  align-items: center;

  color: #000000;

  /* flex: none; */
  /* order: 1; */
  align-self: stretch;
  flex-grow: 0;
`;
export const HourMessage = styled.div`
  color: var(--gray3);
`;

////////////////////////////////////

export const Message = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  margin-bottom: 16px;

  width: 490px;
  height: auto;

  background: #fcfcfc;
  border-radius: 8px 0px 8px 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const MessageAttend = styled.span`
  width: 408px;
  height: 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #828282;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const OurTextMessage = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 140% */

  display: flex;
  align-items: center;

  /* Black */

  color: #000000;

  /* Inside auto layout */
  /* 
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0; */
`;
