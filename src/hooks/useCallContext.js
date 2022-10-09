import { CallContext } from '../context/CallProvider';
import { useContext } from 'react';

export const useCallContext = () => {
  const context = useContext(CallContext);

  return context;
};
