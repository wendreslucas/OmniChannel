import React from 'react';
import { Container } from './styles';
import { HeaderBody } from './HeaderBody/index';
import { Chat } from './Chat/index';

export const Body = () => {
  return (
    <Container>
      <HeaderBody />
      <Chat />
    </Container>
  );
};
