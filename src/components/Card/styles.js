import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border: ${props => (props.active ? '2px solid var(--primary)' : 0)};
  border-image-slice: 1;
  border-width: 2px;
  border-radius: 8px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 8px 16px 8px 16px;
  width: 346px;
`;

export const DivUser = styled.div`
  align-items: center;
  display: flex;
`;

export const UserImage = styled.img`
  border-radius: 100px;
  height: 44px;
  margin-right: 8px;
  width: 44px;
`;

export const UserName = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

export const DateTime = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
