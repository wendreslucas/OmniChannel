import React, { createContext, useMemo, useState, useEffect } from 'react';
import { apiAtendimentos } from './../services/api';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    apiAtendimentos.get('chamados').then((usuarioChamado) => {
      setUser(usuarioChamado);
      console.log('Context: ' + usuarioChamado);
    });
  }, []);

  return (
    <UserContext.Provider value={useMemo(() => ({ user, setUser }), [user])}>
      {children}
    </UserContext.Provider>
  );
}
