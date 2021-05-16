import styled from 'styled-components';

interface ContainerProps {
  maxSize?: string;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;

  button {
    background: #bb2222;
    border: none;
    color: #e9e9e9;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Bungee';
    max-width: ${props => props.maxSize || 'max-content'};
    width: ${props => props.width || '100%'};
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0 8px 8px 0;
  }
`;
