import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;

    box-shadow: 1px 1px 2px 2px #000000;
  }
`;

export const Title = styled.h1`
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 96px;
  color: rgba(255, 255, 255, 0.9);
`;
