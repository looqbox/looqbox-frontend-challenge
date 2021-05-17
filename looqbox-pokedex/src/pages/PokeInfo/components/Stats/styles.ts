import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  margin: 40px 0;

  column-gap: 50px;
  row-gap: 30px;

  .stat {
    width: 100%;
    max-width: 315px;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: Bungee;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 29px;
      color: #ffffff;
    }
  }
`;
