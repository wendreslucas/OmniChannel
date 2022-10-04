import React from 'react';
import { Container, StyledSubtitle } from './styles';

interface ISubtitle {
  Text: string;
  fontSize: string;
}

export const Subtitle = (props: ISubtitle) => {
  const { Text, fontSize } = props;

  return (
    <Container>
      <StyledSubtitle fontSize={fontSize}>{Text}</StyledSubtitle>
    </Container>
  );
};
