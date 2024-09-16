import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
  margin: 0 auto;

  .header-div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 180px;
  }

  .pokedex-img {
    width: 90px;
    height: auto;
    transition: transform 0.3s ease-in-out, rotate 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1) rotate(3deg);
      animation: shake 0.2s ease-in-out;
    }

    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
  }
`;
