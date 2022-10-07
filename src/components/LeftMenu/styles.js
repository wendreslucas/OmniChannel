import styled, { css } from 'styled-components';
import { MdKeyboardArrowUp, MdOutlineSearch } from '../../styles/Icons';

export const Container = styled.aside`
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  height: 927px;
  overflow: hidden;
  padding: 32px 32px 8px 32px;
  width: 410px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 90vh;
  max-height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
    width: 0.1rem;
  }
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 24px 0%;
`;

export const SubDivision = styled.div`
  align-items: baseline;
  display: flex;
`;

export const Divider = styled.div`
  border: 0;
  border-bottom: 1px solid var(--secondary);
  width: ${(props) => props.width};
`;

export const Div = styled.div`
  display: flex;
`;

export const ContainerSubtitle = styled.div`
  height: 20px;
  margin-bottom: 8px;
  padding: 15px 8px;
`;

const cssIcons = css`
  color: var(--primary);
  font-size: 26px;
`;

export const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  cursor: pointer;
  float: right;
  overflow: hidden;
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : '')};
  ${cssIcons};

  &:hover {
    opacity: 0.7;
  }
`;
export const SearchIcon = styled(MdOutlineSearch)`
  ${cssIcons};
`;

export const CardsSaude = styled.div``;

export const CardsEnergia = styled.div``;
