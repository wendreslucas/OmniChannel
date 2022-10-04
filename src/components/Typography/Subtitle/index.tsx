import React from 'react';
import { Container, StyledSubtitle } from './styles';

interface ISubtitle {
  Text: string;
}

export const Subtitle = (children: ISubtitle) => {
  const { Text } = children;

  return (
    <Container>
      <StyledSubtitle>{Text}</StyledSubtitle>
    </Container>
  );
};
