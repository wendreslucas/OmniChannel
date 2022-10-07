import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/index';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
