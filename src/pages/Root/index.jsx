import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/index';
import { DetalhesLayout } from './../../components/Sidebar/Detalhes/index';
import { DetalhesDados } from './../../components/Sidebar/Detalhes/Dados/index';
import { DetalhesHistorico } from './../../components/Sidebar/Detalhes/Historico/index';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<DetalhesDados />} />
        <Route path="historico" element={<DetalhesHistorico />} />
      </Route>
    </Routes>
  );
};
