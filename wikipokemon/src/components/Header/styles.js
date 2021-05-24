import styled from 'styled-components';

export const HeaderApplication = styled.h1`
  display: flex;
  background: ${props => props.theme.colors.shape};
  border-radius: 12px;
  position: relative;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  div {
    display: flex;

    img {
      width: 90px;
    }

    h1 {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.colors.text};
      font-size: 32px;
      font-weight: 900;

      line-height: 36px;
      justify-content: center;
    }
  }

`;