import React from 'react';
import { Container } from './styles';

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = (props: LogoProps) => {
  const { width, height } = props;
  return (
    <Container>
      <img src="/logo.png" width={width} height={height} />
    </Container>
  );
};
