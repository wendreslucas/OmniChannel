import React from 'react';
import { Container, Box, ContainerText } from './styles';
import { DadosHistorico } from '../DadosHistorico/index';

import { Text } from './../../Typography/Text/index';

export const DetalhesAtendimento = () => {
  return (
    <Container>
      <DadosHistorico />
      <Box>
        <ContainerText>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="var(--primary)"
            weight="700"
          >
            Unidade de Atendimento
          </Text>
          <Text
            fontSize="14px"
            lineHeight="19.6px"
            color="var(--primary)"
            weight="400"
          >
            Unimed VIX
          </Text>
        </ContainerText>
        <ContainerText>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="var(--primary)"
            weight="700"
          >
            Campanha
          </Text>
          <Text
            fontSize="14px"
            lineHeight="19.6px"
            color="var(--primary)"
            weight="400"
          >
            Programa de fidelidade Vitta
          </Text>
        </ContainerText>
      </Box>
    </Container>
  );
};
