import React from 'react';
import { Box, Aling, Value } from './styles';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { Text } from './../../Typography/Text/index';

import { ButtonsAtendimento } from './../ButtonsAtendimento/index';

export const InfoAtendimento = () => {
  return (
    <Box>
      <Text weight="700" fontSize="18px" color="var(--black)" lineHeight="25px">
        Emanuelle Costa
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
        <Value>004837</Value>
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
        <MdEmail fontSize={28} />
        <Value>wendreslucas@gmail.com</Value>
      </Aling>
      <Aling>
        <IoMdCall fontSize={28} />
        <Value>+55 98456-1283</Value>
      </Aling>
      <Aling>
        <FaWhatsapp fontSize={28} />
        <Value> +55 98862-4326</Value>
      </Aling>
    </Box>
  );
};
