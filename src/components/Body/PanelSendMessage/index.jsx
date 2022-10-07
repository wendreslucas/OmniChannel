import React from 'react';
import { ButtonEnviar } from '../../Body/PanelSendMessage/ButtonEnviar';
import { Container } from './styles';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import InputSendMessage from '../../Input/Input/index';

export const PanelSendMessage = () => {
  return (
    <Container>
      <BsEmojiSmile fontSize={24} color="var(--gray)" />
      <FiPaperclip fontSize={24} color="var(--primary)" />
      <InputSendMessage />
      <ButtonEnviar
        backgroundColor="var(--secondary)"
        color="var(--primary)"
        Text="Enviar"
      />
    </Container>
  );
};
