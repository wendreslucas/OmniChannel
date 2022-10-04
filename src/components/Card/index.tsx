import React from 'react';
import {
  Container,
  DateTime,
  DivInfo,
  DivUser,
  UserImage,
  UserName,
} from './styles';
import { FaWhatsapp } from 'react-icons/fa';

interface CardProps {
  active: boolean;
}

export const Card = (props: CardProps) => {
  const { active } = props;
  return (
    <Container active={active}>
      <DivUser>
        <UserImage src="/imagens/image2.png" alt="Foto do Usuário" />
        <UserName>Emanuelle Costa</UserName>
      </DivUser>
      {/*  <date/> */}
      <DivInfo>
        <DateTime>Ontem</DateTime>
        <FaWhatsapp fontSize={20} />
      </DivInfo>
    </Container>
  );
};
