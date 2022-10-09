import React, { useState, useEffect } from 'react';
import { apiAtendimentos } from './../../../services/api';
import { CardAtendimento } from './../CardAtendimento/index';
import { useCallContext } from './../../../hooks/useCallContext';

export const ListaAtendimento = () => {
  const [atendimentos, setAtendimentos] = useState([]);
  const context = useCallContext();

  useEffect(() => {
    apiAtendimentos.get('chamados').then((chamados) => {
      context.updateUser(chamados.data);
    });
  }, []);

  return (
    <>
      {context.data.map((atendimento, index) => (
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
