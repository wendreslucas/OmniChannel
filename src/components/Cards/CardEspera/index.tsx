import React from 'react';
import { Container, DivButton, DivUser, UserImage } from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { Text } from './../../Typography/Text';
import { Button } from './../../Button/index';

export const CardEspera = () => {
  return (
    <Container>
      <DivUser>
        <UserImage src="/imagens/image7.png" alt="Foto usuário" />
        <Text
          weight="400"
          fontSize="14px"
          color="var(--black1)"
          lineHeight="20px"
        >
          Amanda dos Anjos
        </Text>
      </DivUser>
      <DivButton>
        <FaWhatsapp fontSize={22} color="var(--primary)" />
        <Button
          backgroundColor="var(--primary)"
          color="var(--white)"
          Text="Iniciar"
        />
      </DivButton>
    </Container>
  );
};
