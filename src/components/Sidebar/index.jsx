import React from 'react';
import { InfoAtendimento } from './InfoAtendimento/index';
import { Container, ContainerAtendimento } from './styles';
import { ButtonsAtendimento } from './ButtonsAtendimento/index';
import { DetalhesLayout } from './Detalhes/index';

export const Sidebar = () => {
  return (
    <Container>
      <ContainerAtendimento>
        <InfoAtendimento />
        <ButtonsAtendimento />
      </ContainerAtendimento>
      <DetalhesLayout />
    </Container>
  );
};
