import styled from 'styled-components';

export const Container = styled.div`
    & > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 272px;
        height: 272px;

        padding: 16px;

        border-radius: 8px;
        border: 1px solid var(--stroke);

        & > p {
            width: 100%;
            text-align: left;
        }
    }
`;

export const PokemonPhoto = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
`;

export const Types = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;

    & > div {
        padding: 4px 8px;

        & > b {
            font-size: 16px;
        }
    }

    & > div + div {
        margin-left: 16px;
    }
`;