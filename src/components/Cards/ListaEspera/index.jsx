import React, { useEffect, useState } from 'react';
import { apiAtendimentos } from './../../../services/api';
import { CardEspera } from './../CardEspera/index';

export const ListaEspera = () => {
  const [atendimentoEspera, setAtendimentoEspera] = useState([]);

  useEffect(() => {
    apiAtendimentos.get('chamados').then((atendimentosEmEspera) => {
      setAtendimentoEspera(atendimentosEmEspera.data);
    });
  }, []);

  return (
    <>
      {atendimentoEspera.map((atendimento, index) => (
        <CardEspera
          key={index}
          nome={atendimento.nome}
          imagem={atendimento.imagem}
        />
      ))}
    </>
  );
};
