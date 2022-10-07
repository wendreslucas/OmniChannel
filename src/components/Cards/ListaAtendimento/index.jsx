import React, { useState, useEffect } from 'react';
import { apiAtendimentos } from './../../../services/api';
import { CardAtendimento } from './../CardAtendimento/index';

export const ListaAtendimento = () => {
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(() => {
    apiAtendimentos.get('chamados').then((chamados) => {
      setAtendimentos(chamados.data);
    });
  }, []);

  return (
    <>
      {atendimentos.map((atendimento, index) => (
        <CardAtendimento
          key={index}
          nome={atendimento.nome}
          dateTime={atendimento.dateTime}
          imagem={atendimento.imagem}
        />
      ))}
    </>
  );
};
