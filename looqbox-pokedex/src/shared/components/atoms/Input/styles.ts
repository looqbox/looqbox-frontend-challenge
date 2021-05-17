import styled, { css } from 'styled-components';

interface ContainerProps {
  hasChildren: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 500px;
  width: 100%;
  height: 50px;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 0 25px;

  input {
    background: transparent;
    border: none;

    height: 100%;
    width: 100%;

    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    ::placeholder {
      color: rgba(0, 0, 0, 0.28);
    }
  }

  ${props =>
    props.hasChildren &&
    css`
      display: flex;
      justify-content: space-between;
      padding: 0;

      input {
        padding: 0 30px;
      }
    `}
`;
