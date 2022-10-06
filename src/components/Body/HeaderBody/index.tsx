import React from 'react';
import {
  Box,
  Container,
  RigthContainer,
  DivIconSms,
  DivEmail,
  DivDuration,
  LeftContainer,
  DivInfo,
} from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineSearch } from 'react-icons/md';

import { Text } from '../../Typography/Text';

export const HeaderBody = () => {
  return (
    <Box>
      <Container>
        <RigthContainer>
          <DivIconSms active={true}>
            <FaWhatsapp fontSize={22} color="var(--primary)" />
          </DivIconSms>
          <DivEmail active={false}>
            <MdOutlineEmail fontSize={22} color="var(--primary)" />
          </DivEmail>
          <DivDuration>
            <Text
              weight="400"
              lineHeight="22px"
              fontSize="16px"
              color="var(--primary)"
            >
              Duração
            </Text>
            <Text
              weight="700"
              lineHeight="25.2px"
              fontSize="16px"
              color="var(--primary)"
            >
              05:21:22
            </Text>
          </DivDuration>
        </RigthContainer>

        <LeftContainer>
          <DivInfo>
            <Text
              weight="400"
              lineHeight="22px"
              fontSize="16px"
              color="var(--primary)"
            >
              Protocolo ANS
            </Text>
            <Text
              weight="700"
              lineHeight="25.2px"
              fontSize="16px"
              color="var(--primary)"
            >
              34665-9
            </Text>
          </DivInfo>
          <MdOutlineSearch fontSize={22} color="var(--primary)" />
        </LeftContainer>
      </Container>
    </Box>
  );
};
