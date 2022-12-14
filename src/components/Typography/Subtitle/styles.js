import styled from 'styled-components';

export const Container = styled.div`
  height: 20px;
  margin-bottom: 8px;
  /* padding: ${props => props.padding}; */
  padding: 24px 0;
  width: 288px;
`;

export const StyledSubtitle = styled.h2`
  color: var(--primary);
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.fontSize};
  line-height: 20px;
`;
