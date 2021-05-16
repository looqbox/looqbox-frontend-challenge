import styled from 'styled-components';

import headerBg from 'shared/assets/images/headerBgTransparent.svg';

export const Container = styled.div`
  background-size: cover;
  background: linear-gradient(90deg, #161616 11%, #242424, #161616 89%);

  height: 400px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Background = styled.section`
  background: url(${headerBg}) no-repeat center;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 96px;

    color: rgba(255, 255, 255, 0.9);

    margin-bottom: 45px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 50px;
    }
  }
`;
