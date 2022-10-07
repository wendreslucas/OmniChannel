import React from 'react';
import {
  Container,
  ButtonAgendar,
  Span,
  ButtonFinalizar,
  CalendarIcon,
  PowerIcon,
} from './styles';

export const ButtonsAtendimento = () => {
  return (
    <Container>
      <ButtonAgendar>
        <CalendarIcon />
        <Span>Agendar Retorno</Span>
      </ButtonAgendar>
      <ButtonFinalizar>
        <PowerIcon />
        <Span>Finalizar Atendimento</Span>
      </ButtonFinalizar>
    </Container>
  );
};
