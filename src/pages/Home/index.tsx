import React from 'react';
import { Header } from '../../components/Header';
import { LeftMenu } from '../../components/LeftMenu';
import { Sidebar } from '../../components/Sidebar';
import { Body } from './../../components/Body/index';
import { Container } from './styles';

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftMenu />
        <Body />
        <Sidebar />
      </Container>
    </>
  );
};
