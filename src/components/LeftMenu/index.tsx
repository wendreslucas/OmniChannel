import React, { useState } from 'react';
import {
  Container,
  Content,
  SubDivision,
  Divider,
  Div,
  Section,
  ContainerSubtitle,
} from './styles';
import { Title } from './../Typography/Title/index';
import { Subtitle } from './../Typography/Subtitle/index';
import { StyledInput, Input } from '../Input/InputSearch/styles';
import { MdKeyboardArrowUp, MdOutlineSearch } from 'react-icons/md';
import { Card } from './../Cards/CardAtendimento/index';

import { Counter } from '../Counter';
import { CardEspera } from './../Cards/CardEspera/index';
import { Text } from './../Typography/Text/index';

export const LeftMenu = () => {
  const [search, setInputSearch] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value);
  }

  return (
    <Container>
      <Title />
      <ContainerSubtitle>
        <Text
          lineHeight="19.6px"
          weight="700"
          color="var(--primary)"
          fontSize="14px"
        >
          Buscar atendimento
        </Text>
      </ContainerSubtitle>
      <StyledInput className={'inputWithIcon'}>
        <Input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Digite o nome ou ID do cliente"
        />
        <div className="right-icon">
          <MdOutlineSearch fontSize={24} color={''} />
        </div>
      </StyledInput>

      <Content>
        <SubDivision>
          <ContainerSubtitle>
            <Text
              lineHeight="25px"
              weight="700"
              color="var(--primary)"
              fontSize="16px"
            >
              EM ANDAMENTO
            </Text>
          </ContainerSubtitle>
          <Divider width="200px" />
        </SubDivision>
        <Card active={true} />
        <Card active={false} />
        <Card active={false} />
        <SubDivision>
          <ContainerSubtitle>
            <Text
              lineHeight="25px"
              weight="700"
              color="var(--primary)"
              fontSize="16px"
            >
              EM ESPERA
            </Text>
          </ContainerSubtitle>
          <Divider width="238px" />
        </SubDivision>
        <Section>
          <Subtitle fontSize="16px" Text="Campanha Saúde e vida" />
          <Div>
            <Counter Text="2" />
            <MdKeyboardArrowUp fontSize={26} />
          </Div>
        </Section>
        <CardEspera />
        <Section>
          <Subtitle fontSize="16px" Text="Campanha Energia para Todos" />
          <Div>
            <Counter Text="2" />
            <MdKeyboardArrowUp fontSize={26} />
          </Div>
        </Section>
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
        <CardEspera />
      </Content>
    </Container>
  );
};
