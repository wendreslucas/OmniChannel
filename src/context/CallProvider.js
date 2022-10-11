import React from 'react';
import { createContext, useState } from 'react';

const CallContext = createContext();

const CallProvider = ({ children }) => {
  const [data, setData] = useState([]);

  function updateLista(users) {
    console.log('updateLista', users);
    setData(users);
  }

  return (
    <CallContext.Provider value={{ data, updateLista }}>
      {children}
    </CallContext.Provider>
  );
};

export { CallContext, CallProvider };
