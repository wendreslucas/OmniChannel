import React from 'react';
import { Container } from './styles';
import { Outlet } from 'react-router-dom';
import { DadosHistorico } from './../DadosHistorico/index';

export const DetalhesLayout = () => {
  return (
    <Container>
      <DadosHistorico />
      <Outlet />
    </Container>
  );
};
