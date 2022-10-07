import styled, { css } from 'styled-components';
import { BsEmojiSmile, FiPaperclip } from '../../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 718px;
  height: 92px;

  background: var(--white);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const iconCss = css`
  font-size: 24px;
`;
export const EmojiIcon = styled(BsEmojiSmile)`
  color: var(--gray);
  ${iconCss};
`;

export const ClipIcon = styled(FiPaperclip)`
  ${iconCss};
  color: var(--primary);
`;
