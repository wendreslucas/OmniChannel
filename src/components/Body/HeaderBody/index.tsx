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
  WhatsappIcon,
  EmailIcon,
  SearchIcon,
} from './styles';

import { Text } from '../../Typography/Text';

export const HeaderBody = () => {
  return (
    <Box>
      <Container>
        <RigthContainer>
          <DivIconSms active={true}>
            <WhatsappIcon />
          </DivIconSms>
          <DivEmail>
            <EmailIcon />
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
          <SearchIcon />
        </LeftContainer>
      </Container>
    </Box>
  );
};
