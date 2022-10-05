import React from 'react';
import { Container, Div } from './styles';
import { HeaderBody } from './HeaderBody/index';
import { Chat } from './Chat/index';
import PanelSendMessage from './PanelSendMessage/index';

export const Body = () => {
  return (
    <Container>
      <Div>
        <HeaderBody />
        <Chat />
      </Div>
      <PanelSendMessage />
    </Container>
  );
};
