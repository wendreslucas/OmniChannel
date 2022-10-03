import { Route, Routes } from 'react-router-dom';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
