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
} from './styles';
import { TbMenu2 } from 'react-icons/tb';
import { MdDescription } from 'react-icons/md';
import { BsCalendar, BsCheck, BsFillCheckCircleFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Text } from '../Typography/Text';
import { useNavigate } from 'react-router-dom';

const pages = ['Scripts', 'Agendamentos', 'Ligar'];

export const Header = () => {
  const navigate = useNavigate();

  function handleHomePage() {
    navigate('/');
  }
  return (
    <Container>
      <RightContainer>
        <Logo width={40} height={40} onClick={handleHomePage} />
        <TbMenu2 fontSize={47} color="var(--secondary)" />
      </RightContainer>

      <LeftContainer>
        <ContainerOption width="117px">
          <MdDescription fontSize={18} color="var(--white)" />
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
          <BsCalendar fontSize={22} color="var(--white)" />
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
          <IoMdCall fontSize={18} color="var(--white)" />
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
              <BsCheck color="var(--white)" />
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
          <MdKeyboardArrowDown fontSize={22} color="var(--white)" />
        </MenuContainer>
      </LeftContainer>
    </Container>
  );
};
