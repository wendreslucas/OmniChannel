import React from 'react';
import {
  Container,
  DateTime,
  DivInfo,
  DivUser,
  UserImage,
  UserName,
  WhatsappIcon,
  EmailIcon,
} from './styles';

import { Counter } from './../../Counter/index';

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
      <DivInfo active={active}>
        <DateTime>12:13</DateTime>
        {active ? (
          <WhatsappIcon />
        ) : (
          <>
            <EmailIcon />
            <Counter Text="2" />
          </>
        )}
      </DivInfo>
    </Container>
  );
};
