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
            <FaWhatsapp fontSize={22} />
          </DivIconSms>
          <DivEmail active={false}>
            <MdOutlineEmail fontSize={22} />
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
            <p>05:21:22</p>
            {/* <Subtitle fontSize="16px" Text="05:21:22" /> */}
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
            <p>34665-9</p>
          </DivInfo>
          <MdOutlineSearch fontSize={22} color={''} />
        </LeftContainer>
      </Container>
    </Box>
  );
};
