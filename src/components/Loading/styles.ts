import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin-right: 5px;
    font-weight: bold;
    color: #ff0000;
    font-family: "Montserrat", sans-serif;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #ff0000;
    animation: ${bounce} 1s infinite ease-in-out;
  }

  .dot:nth-child(2) {
    animation-delay: -0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
