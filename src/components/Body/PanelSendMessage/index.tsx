import React from 'react';
import { Button } from '../../Button';
import { Container } from './styles';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import InputSendMessage from './../../Input/Input/index';

const PanelSendMessage: React.FC = () => {
  return (
    <Container>
      <BsEmojiSmile fontSize={24} />
      <FiPaperclip fontSize={24} />
      <InputSendMessage />
      <Button
        backgroundColor="var(--secondary)"
        color="var(--primary)"
        Text="Enviar"
      />
    </Container>
  );
};

export default PanelSendMessage;
