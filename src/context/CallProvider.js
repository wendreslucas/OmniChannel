import React from 'react';
import { createContext, useState } from 'react';

const CallContext = createContext();

const CallProvider = ({ children }) => {
  const [data, setData] = useState([]);

  function updateUser(user) {
    console.log('updateUser', user);
    setData(user);
  }

  return (
    <CallContext.Provider value={{ data, updateUser }}>
      {children}
    </CallContext.Provider>
  );
};

export { CallContext, CallProvider };
