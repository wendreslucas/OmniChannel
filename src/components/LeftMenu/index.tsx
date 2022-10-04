import React, { useState } from 'react';
import { Container } from './styles';
import { Title } from './../Typography/Title/index';
import { Subtitle } from './../Typography/Subtitle/index';
import { StyledInput, Input } from '../Input/InputSearch/styles';
import { MdOutlineSearch } from 'react-icons/md';

export const LeftMenu = () => {
  const [search, setInputSearch] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value);
  }

  return (
    <Container>
      <Title />
      <Subtitle />
      <StyledInput className={'inputWithIcon'}>
        <Input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Digite o nome ou ID do cliente"
        />
        <div className="right-icon">
          <MdOutlineSearch fontSize={24} color={''} />
        </div>
      </StyledInput>
    </Container>
  );
};
