import React from 'react';
import { Box, Aling, Value, EmailIcon, CallIcon, WhatsappIcon } from './styles';
import { Text } from '../../Typography/Text/index';
import { useCallContext } from './../../../hooks/useCallContext';

export const InfoAtendimento = () => {
  const context = useCallContext();
  console.log(context.data);

  return (
    <Box>
      <Text weight="700" fontSize="18px" color="var(--black)" lineHeight="25px">
        {context.nome}
      </Text>
      <Aling>
        <Text
          weight="400"
          fontSize="14px"
          color="var(--gray)"
          lineHeight="19.6px"
        >
          ID:
        </Text>
        <Value>{context.id}</Value>
      </Aling>
      <Aling>
        <Text
          weight="700"
          fontSize="14px"
          lineHeight="19.6px"
          color="var(--primary)"
        >
          CPF
        </Text>
        <Value>137.550.890-20</Value>
      </Aling>
      <Aling>
        <EmailIcon />
        <Value>wendreslucas@gmail.com</Value>
      </Aling>
      <Aling>
        <CallIcon />
        <Value>+55 98456-1283</Value>
      </Aling>
      <Aling>
        <WhatsappIcon />
        <Value> +55 98862-4326</Value>
      </Aling>
    </Box>
  );
};
