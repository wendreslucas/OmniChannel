import React from 'react';
import { Logo } from '../Logo/index';
import {
  RightContainer,
  Container,
  LeftContainer,
  ContainerOption,
  MenuContainer,
  Imagem,
  ContainerText,
  DivImagem,
  IconStatus,
  MenuIcon,
  ScriptIcon,
  CalendarioIcon,
  CallIcon,
  CheckIcon,
  ArrowDownIcon,
} from './styles';

import { Text } from '../Typography/Text';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  function handleHomePage() {
    navigate('/');
  }
  return (
    <Container>
      <RightContainer>
        <Logo width={40} height={40} onClick={handleHomePage} />
        <MenuIcon />
      </RightContainer>

      <LeftContainer>
        <ContainerOption width="117px">
          <ScriptIcon />
          <Text
            weight="400"
            fontSize="16px"
            color="var(--white)"
            lineHeight="22.4px"
          >
            Scripts
          </Text>
        </ContainerOption>
        <ContainerOption width="179px">
          <CalendarioIcon />
          <Text
            weight="400"
            fontSize="16px"
            color="var(--white)"
            lineHeight="22.4px"
          >
            Agendamentos
          </Text>
        </ContainerOption>
        <ContainerOption width="102px">
          <CallIcon />
          <Text
            weight="400"
            fontSize="16px"
            color="var(--white)"
            lineHeight="22.4px"
          >
            Ligar
          </Text>
        </ContainerOption>
        <MenuContainer>
          <DivImagem>
            <Imagem src="/imagens/image5.png" alt="Foto do atendente" />
            <IconStatus>
              <CheckIcon />
            </IconStatus>
          </DivImagem>

          <ContainerText>
            <Text
              weight="700"
              fontSize="18px"
              color="var(--white)"
              lineHeight="25.2px"
            >
              Cecilia Santos
            </Text>
            <Text
              weight="400"
              fontSize="14px"
              color="var(--white)"
              lineHeight="19.6px"
            >
              Disponível
            </Text>
          </ContainerText>
          <ArrowDownIcon />
        </MenuContainer>
      </LeftContainer>
    </Container>
  );
};
