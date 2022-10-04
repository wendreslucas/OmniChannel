import styled from 'styled-components';

export const Input = styled.input`
  height: 56px;
  font-size: 14x;
  width: 100%;
  border: 1px solid var(--primary);
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding: 16px 15px 16px 15px;
  cursor: pointer;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 8px 0 var(--primary);
  }

  :focus + .left-icon {
    svg {
      fill: var(--primary);
    }
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .right-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: var(--gray3);
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;
