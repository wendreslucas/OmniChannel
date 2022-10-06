import React from 'react';
import { InfoAtendimento } from './InfoAtendimento/index';
import { Container, ContainerAtendimento } from './styles';
import { ButtonsAtendimento } from './ButtonsAtendimento/index';
import { Historico } from './Historico/index';

export const Sidebar = () => {
  return (
    <Container>
      <ContainerAtendimento>
        <InfoAtendimento />
        <ButtonsAtendimento />
      </ContainerAtendimento>
      <Historico />
    </Container>
  );
};
