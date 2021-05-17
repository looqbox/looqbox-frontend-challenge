import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Bungee;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;

    color: rgba(255, 255, 255, 0.9);
  }

  .moves {
    width: 100%;
    margin: 50px 0;
    row-gap: 5px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    .move {
      width: 100%;
      max-width: 315px;
      display: flex;
      justify-content: space-between;

      span {
        font-family: Bungee;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 29px;

        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;
