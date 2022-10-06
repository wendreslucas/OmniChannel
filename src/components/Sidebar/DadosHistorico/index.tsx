import React from 'react';
import { Container, StyledSpan } from './styles';

export const DadosHistorico = () => {
  return (
    <Container>
      <StyledSpan active={true}>Dados</StyledSpan>
      <StyledSpan>Histórico</StyledSpan>
    </Container>
  );
};
