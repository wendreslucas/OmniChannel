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
import moment from 'moment';
import 'moment/locale/pt-br';

export const CardAtendimento = (props) => {
  const { nome, dateTime, imagem } = props;
  const [active, setActive] = useState(false);

  return (
    <Container onClick={(e) => setActive((active) => !active)}>
      <DivUser>
        <UserImage src={imagem} alt="Foto do Usuário" />
        <UserName>{nome}</UserName>
      </DivUser>
      <DivInfo>
        <DateTime> {moment(dateTime).format('LT')}</DateTime>

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
