import React from 'react';
import { Logo } from '../Logo/index';
import {
  RightContainer,
  Container,
  LeftContainer,
  MenuContainer,
  Imagem,
  ContainerText,
} from './styles';
import { TbMenu2 } from 'react-icons/tb';
import { MdDescription } from 'react-icons/md';
import { BsCalendar } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Text } from '../Typography/Text';

const pages = ['Scripts', 'Agendamentos', 'Ligar'];

export const Header = () => {
  return (
    <Container>
      <RightContainer>
        <Logo width={40} height={40} />
        <TbMenu2 fontSize={47} />
      </RightContainer>

      <LeftContainer>
        <MdDescription fontSize={18} />
        Script
        <BsCalendar fontSize={22} />
        Agendamentos
        <IoMdCall fontSize={18} />
        Ligar
        <MenuContainer>
          <Imagem src="/imagens/image6.png" alt="Foto do atendente" />
          <ContainerText>
            <Text
              weight="700"
              fontSize="18px"
              color="var(--white)"
              lineHeight="25px"
            >
              Joaquim Santos
            </Text>
          </ContainerText>
          <MdKeyboardArrowDown fontSize={40} />
        </MenuContainer>
      </LeftContainer>
    </Container>
  );
};
