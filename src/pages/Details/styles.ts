import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const Main = styled.div`
    position: relative;

    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    width: fit-content;
    padding: 48px;

    & > span {
        font-size: 20px;
    }

    & > h1 {
        font-size: 48px;
    }

    @media (max-width: 768px) {
        height: auto;
        width: 100vw;

        & > span {
            font-size: 18px;
        }

        & > h1 {
            font-size: 40px;
        }
    }

    &.background-normal {
        background-color: var(--background-normal);
    }

    &.background-fire{
        background-color: var(--background-fire);
    }

	&.background-water{
        background-color: var(--background-water);
    }

	&.background-electric{
        background-color: var(--background-electric);
    }

	&.background-grass{
        background-color: var(--background-grass);
    }

	&.background-ice{
        background-color: var(--background-ice);
    }

	&.background-fighting{
        background-color: var(--background-fighting);
    }

	&.background-poison{
        background-color: var(--background-poison);
    }

	&.background-ground{
        background-color: var(--background-ground);
    }

	&.background-flying{
        background-color: var(--background-flying);
    }

	&.background-psychic{
        background-color: var(--background-psychic);
    }

	&.background-bug{
        background-color: var(--background-bug);
    }

	&.background-rock{
        background-color: var(--background-rock);
    }

	&.background-ghost{
        background-color: var(--background-ghost);
    }

	&.background-dragon{
        background-color: var(--background-dragon);
    }

	&.background-dark{
        background-color: var(--background-dark);
    }

	&.background-steel{
        background-color: var(--background-steel);
    }

	&.background-fairy{
        background-color: var(--background-fairy);
    }

`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;