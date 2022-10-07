import React, { useEffect, useContext } from 'react';

import {
  Container,
  Content,
  SubDivision,
  Divider,
  Div,
  Section,
  ContainerSubtitle,
  ArrowUpIcon,
  SearchIcon,
  CardsSaude,
  CardsEnergia,
} from './styles';
import { Title } from '../Typography/Title/index';
import { StyledInput, Input } from '../Input/InputSearch/styles';
import { Counter } from '../Counter';
import { Text } from '../Typography/Text/index';
import { apiAtendimentos } from '../../services/api';
import { CardEstatico } from './../Cards/CardEstático/index';
import { ListaAtendimento } from './../Cards/ListaAtendimento/index';
import { ListaEspera } from './../Cards/ListaEspera/index';
import { LeftMenuContext } from './../../context/LeftMenuContext';

export const LeftMenu = () => {
  const {
    handleInputChange,
    handleCardEnergia,
    handleCardSaude,
    search,
    rotateSaude,
    cardEnergiaVisible,
    cardSaudeVisible,
    rotateEnergia,
    setAtendimentos,
  } = useContext(LeftMenuContext);

  useEffect(() => {
    apiAtendimentos.get('chamados').then((chamados) => {
      setAtendimentos(chamados.data);
      console.log(chamados.data);
    });
  }, []);

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
          <SearchIcon />
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
        <CardEstatico active={true} />
        <ListaAtendimento />
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
          <Text
            color="var(--primary)"
            lineHeight="25.2px"
            weight="700"
            fontSize="16px"
          >
            Campanha Saúde e vida
          </Text>
          <Div>
            <Counter Text="2" />
            <ArrowUpIcon rotate={rotateSaude} onClick={handleCardSaude} />
          </Div>
        </Section>
        {cardSaudeVisible && (
          <CardsSaude style={{ transition: 'all 0.5s ease' }}>
            <ListaEspera />
            <CardEstatico active={false} />
          </CardsSaude>
        )}
        <Section>
          <Text
            color="var(--primary)"
            lineHeight="25.2px"
            weight="700"
            fontSize="16px"
          >
            Campanha Energia para Todos
          </Text>
          <Div>
            <Counter Text="2" />
            <ArrowUpIcon rotate={rotateEnergia} onClick={handleCardEnergia} />
          </Div>
        </Section>
        {cardEnergiaVisible && (
          <CardsEnergia style={{ transition: 'all 0.5s ease' }}>
            <ListaEspera />
            <CardEstatico active={false} />
          </CardsEnergia>
        )}
      </Content>
    </Container>
  );
};
