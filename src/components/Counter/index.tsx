import React from 'react';
import { Circle, Count } from './styles';

interface ICountProps {
  Text: string;
}

export const Counter = (props: ICountProps) => {
  const { Text } = props;

  return (
    <Circle>
      <Count>{Text}</Count>
    </Circle>
  );
};
