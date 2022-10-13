import React from 'react';
import { Container, Box, ContainerText, Divider } from './styles';
import { Text } from './../../../Typography/Text/index';

export const DetalhesDados = () => {
  return (
    <Container>
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
        <Divider />
        <ContainerText>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="var(--primary)"
            weight="700"
          >
            Melhor horário para contato
          </Text>
          <Text
            fontSize="14px"
            lineHeight="19.6px"
            color="var(--primary)"
            weight="400"
          >
            13:00
          </Text>
        </ContainerText>
        <ContainerText>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="var(--primary)"
            weight="700"
          >
            Última interação
          </Text>
          <Text
            fontSize="14px"
            lineHeight="19.6px"
            color="var(--primary)"
            weight="400"
          >
            11/01/22 11:23
          </Text>
        </ContainerText>
        <ContainerText>
          <Text
            fontSize="14px"
            lineHeight="20px"
            color="var(--primary)"
            weight="700"
          >
            Duração
          </Text>
          <Text
            fontSize="14px"
            lineHeight="19.6px"
            color="var(--primary)"
            weight="400"
          >
            01:45:58
          </Text>
        </ContainerText>
      </Box>
    </Container>
  );
};
