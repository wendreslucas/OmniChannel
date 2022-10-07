import React from 'react';
import { Container, StyledSubtitle } from './styles';

export const Subtitle = props => {
  const { Text, fontSize } = props;

  return (
    <Container>
      <StyledSubtitle fontSize={fontSize}>{Text}</StyledSubtitle>
    </Container>
  );
};
