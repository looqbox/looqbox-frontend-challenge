import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  display: grid;
  grid-template-rows: 60px 20px;
  gap: 5px;

  transform: scale(2);

  span {
    color: #e3e3e3;
    font-family: Bungee;
    font-size: 12px;
  }

  img {
    align-self: flex-end;
    justify-self: center;
    max-height: 60px;
    max-width: 60px;

    cursor: pointer;
  }
`;
