import React, { useEffect } from 'react';
import { apiAtendimentos } from './../../../services/api';
import { CardAtendimento } from './../CardAtendimento/index';
import { useCallContext } from './../../../hooks/useCallContext';

export const ListaAtendimento = () => {
  const context = useCallContext();

  useEffect(() => {
    apiAtendimentos.get('chamados').then((chamados) => {
      context.updateLista(chamados.data);
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
