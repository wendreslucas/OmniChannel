import React, { useState, useCallback } from 'react';
import { Container, StyledSpan } from './styles';
import { useNavigate } from 'react-router-dom';

export const DadosHistorico = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive((prevSate) => !prevSate.active);
  });

  function handleDados() {
    navigate('/');
  }

  function handleHistorico() {
    navigate('/historico');
  }

  return (
    <Container>
      <StyledSpan onClick={handleDados}>Dados</StyledSpan>
      <StyledSpan onClick={handleHistorico}>Histórico</StyledSpan>
    </Container>
  );
};
