import React from 'react';
import { StyledButton, TextButton } from './styles';

interface IButtonProps {
  Text: string;
  backgroundColor: string;
  color: string;
}

export const Button = (props: IButtonProps) => {
  const { Text, backgroundColor, color } = props;
  return (
    <StyledButton backgroundColor={backgroundColor}>
      <TextButton color={color}>{Text}</TextButton>
    </StyledButton>
  );
};
