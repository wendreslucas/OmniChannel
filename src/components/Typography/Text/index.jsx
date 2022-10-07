import React from 'react';
import { Typography } from './styles';

export const Text = (props) => {
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
