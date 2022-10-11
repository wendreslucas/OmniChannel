import React from 'react';
import { Container } from './styles';

export const Logo = (props) => {
  const { width, height, onClick } = props;
  return (
    <Container onClick={onClick}>
      <img src="/logo.png" width={width} height={height} alt="logo" />
    </Container>
  );
};
