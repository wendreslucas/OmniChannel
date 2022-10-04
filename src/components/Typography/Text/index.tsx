import React from 'react';
import { Typography } from './styles';

interface ITextProps {
  fontSize: string;
  lineHeight: string;
  color: string;
  children: string;
}

export const Text = (props: ITextProps) => {
  const { children, color, fontSize, lineHeight } = props;
  return (
    <Typography color={color} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </Typography>
  );
};
