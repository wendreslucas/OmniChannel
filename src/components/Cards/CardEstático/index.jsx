import React, { useEffect, useState } from 'react';
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

export const CardEstatico = (props) => {
  const { active } = props;

  return (
    <Container active={active}>
      <DivUser>
        <UserImage src="/imagens/image2.png" alt="Foto do Usuário" />
        <UserName>Emanuelle Costa</UserName>
      </DivUser>
      <DivInfo>
        <DateTime>14:23</DateTime>

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
