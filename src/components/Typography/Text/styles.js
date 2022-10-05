import styled from 'styled-components';

export const Typography = styled.p`
  color: ${props => props.color};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`;
