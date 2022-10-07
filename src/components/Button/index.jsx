import React from 'react';
import { StyledButton, TextButton } from './styles';

export const Button = (props) => {
  const { Text, backgroundColor, color } = props;
  return (
    <StyledButton backgroundColor={backgroundColor}>
      <TextButton color={color}>{Text}</TextButton>
    </StyledButton>
  );
};
