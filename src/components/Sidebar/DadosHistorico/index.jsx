import React, { useState, useCallback } from 'react';
import { Container, StyledSpan } from './styles';
import { useNavigate } from 'react-router-dom';

export const DadosHistorico = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive((prevSate) => !prevSate);
    active === ''; // ajustar verificação de qual botão está ativado
  });

  function handleDados() {
    navigate('/');
    handleActive();
  }

  function handleHistorico() {
    navigate('/historico');
    handleActive();
  }

  return (
    <Container>
      <StyledSpan active={active} onClick={handleDados}>
        Dados
      </StyledSpan>
      <StyledSpan active={!active} onClick={handleHistorico}>
        Histórico
      </StyledSpan>
    </Container>
  );
};
