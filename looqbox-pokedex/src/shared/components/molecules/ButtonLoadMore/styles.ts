import styled from 'styled-components';

import { Container as Button } from 'shared/components/atoms/Button/styles';

export const Container = styled(Button)`
  cursor: pointer;

  button {
    font-size: 16px;
    border-radius: 8px;
  }

  .load {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border: 3px solid;
    border-radius: 50%;
    border-top-color: #fff;
    border-bottom-color: #ffffff5c;
    border-right-color: #ffffff5c;
    border-left-color: #ffffff5c;

    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
