import React from 'react';
import { Typography } from './styles';

interface ITextProps {
  fontSize: string;
  lineHeight: string;
  color: string;
  children: string;
  weight: string;
}

export const Text = (props: ITextProps) => {
  const { children, color, fontSize, lineHeight, weight } = props;
  return (
    <Typography
      weight={weight}
      color={color}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </Typography>
  );
};
