import React, { useState } from 'react';
import { Container, SubDivision, Divider, Div, Section } from './styles';
import { Title } from './../Typography/Title/index';
import { Subtitle } from './../Typography/Subtitle/index';
import { StyledInput, Input } from '../Input/InputSearch/styles';
import { MdKeyboardArrowUp, MdOutlineSearch } from 'react-icons/md';
import { Card } from './../Cards/CardAtendimento/index';
import StickyBox from 'react-sticky-box';

import { Counter } from '../Counter';
import { CardEspera } from './../Cards/CardEspera/index';

export const LeftMenu = () => {
  const [search, setInputSearch] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value);
  }

  return (
    <Container>
      <Title />
      <Subtitle fontSize="14px" Text="Buscar atendimento" />
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
      <StickyBox>
        <SubDivision>
          <Subtitle fontSize="16px" Text="EM ANDAMENTO" />
          <Divider width="500px" />
        </SubDivision>
        <Card active={true} />
        {/* <Card active={false} />
        <Card active={false} />
        <Card active={false} /> */}
        <SubDivision>
          <Subtitle fontSize="16px" Text="EM ESPERA" />
          <Divider width="780px" />
        </SubDivision>
        <Section>
          <Subtitle fontSize="16px" Text="Campanha Saúde e vida" />
          <Div>
            <Counter Text="2" />
            <MdKeyboardArrowUp fontSize={26} />
          </Div>
        </Section>
        <CardEspera />
      </StickyBox>
    </Container>
  );
};
