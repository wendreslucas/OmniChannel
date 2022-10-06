import styled from 'styled-components';
import { Button } from '../../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 718px;
  height: 92px;

  background: var(--white);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const ButtonEnviar = styled(Button)`
  padding: 6px 17px;
`;
