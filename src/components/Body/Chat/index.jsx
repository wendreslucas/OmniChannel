import React from 'react';
import {
  Container,
  MessageList,
  UserMessage,
  BoxMessage,
  // UserMessage,
  User,
  TextMessageUser,
  HourMessage,
  Message,
  MessageAttend,
  OurTextMessage,
} from './styles';

export const Chat = () => {
  return (
    <Container>
      <MessageList>
        <UserMessage>
          <User>Emanuelle Costa</User>
          <BoxMessage>
            <TextMessageUser>
              Oi! Quero participar desse Programa, como faço? Porque eu gosto
              muito, de verdade mesmo, pra caramba aaaaaaaaaaaaaaaaaa aaaaaaaaa
            </TextMessageUser>
            <HourMessage>16:55</HourMessage>
          </BoxMessage>
        </UserMessage>

        <Message>
          <MessageAttend>Cecilia Santos</MessageAttend>
          <BoxMessage>
            <OurTextMessage>
              Você já conhece o Programa Saúde e Vida? Possui alguma dúvida?
            </OurTextMessage>
            <HourMessage>17:26</HourMessage>
          </BoxMessage>
        </Message>
        <Message>
          <MessageAttend>Cecilia Santos</MessageAttend>
          <BoxMessage>
            <OurTextMessage>
              Oi, Emanuelle! Tudo bem?Aqui é a Cecília, da Clínica DOC. Bom dia!
            </OurTextMessage>
            <HourMessage>17:04</HourMessage>
          </BoxMessage>
        </Message>
      </MessageList>
    </Container>
  );
};
