import React from 'react';
import { Container } from './styles';

interface ILogoProps {
  width: number;
  height: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Logo = (props: ILogoProps) => {
  const { width, height, onClick } = props;
  return (
    <Container onClick={onClick}>
      <img src="/logo.png" width={width} height={height} />
    </Container>
  );
};
