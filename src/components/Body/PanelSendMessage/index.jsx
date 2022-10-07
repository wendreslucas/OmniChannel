import React from 'react';
import { ButtonEnviar } from '../../Body/PanelSendMessage/ButtonEnviar';
import { Container, ClipIcon, EmojiIcon } from './styles';

import InputSendMessage from '../../Input/Input/index';

export const PanelSendMessage = () => {
  return (
    <Container>
      <EmojiIcon />
      <ClipIcon />
      <InputSendMessage />
      <ButtonEnviar
        backgroundColor="var(--secondary)"
        color="var(--primary)"
        Text="Enviar"
      />
    </Container>
  );
};
