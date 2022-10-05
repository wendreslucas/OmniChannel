import React from 'react';
import { IoMdCalendar } from 'react-icons/io';
import { MdPowerSettingsNew } from 'react-icons/md';
import { Container, ButtonAgendar, Span, ButtonFinalizar } from './styles';

export const ButtonsAtendimento = () => {
  return (
    <Container>
      <ButtonAgendar>
        <IoMdCalendar fontSize={22} color={'var(--primary)'} />
        <Span>Agendar Retorno</Span>
      </ButtonAgendar>
      <ButtonFinalizar>
        <MdPowerSettingsNew fontSize={22} color={'var(--primary)'} />
        <Span>Finalizar Atendimento</Span>
      </ButtonFinalizar>
    </Container>
  );
};
