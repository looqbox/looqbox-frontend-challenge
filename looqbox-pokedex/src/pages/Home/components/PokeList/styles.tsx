import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 65px 0;
`;

export const List = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 0 30px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;

  margin: 60px 0 80px 0;
`;
