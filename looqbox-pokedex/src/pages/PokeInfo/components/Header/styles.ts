import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 120px;

  .topbar {
    height: 60px;
    width: 100%;
    background: rgb(45 45 45 / 55%);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-around;

    button {
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  .poke {
    display: flex;
    align-items: center;
    gap: 40px;

    svg {
      color: white;
      font-size: 60px;
      margin-top: 50px;

      cursor: pointer;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }

  button,
  h1 {
    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 43px;
    text-align: center;

    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Types = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;

  button {
    font-size: 20px;
    line-height: 20px;
    height: 40px;

    color: #242424;
  }
`;
