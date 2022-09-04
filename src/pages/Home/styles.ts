import styled from 'styled-components';

export const Container = styled.div`
    padding: 48px;
`;

export const PokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    place-items: center;

    justify-content: space-between;

    gap: 16px;

    @media (max-width: 1232px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 950px) {
        grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    padding: 12px;
    border-radius: 8px;

    font-weight: bold;
    color: #FFF;
    background-color: #BF0A0A;

    margin: 24px auto 0;

    cursor: pointer;
`;