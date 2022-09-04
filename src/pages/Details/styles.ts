import styled, { css } from "styled-components";
import { Height, ReturnDownBack, Stars, WeightHanging } from '../../styles/Icons';

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

export const Types = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 24px;

    div + div {
        margin-left: 16px;
    }
`;

export const PokemonPhoto = styled.img`
    display: flex;

    margin-left: auto;
    margin-right: auto;

    max-width: 350px;

    margin-top: 16px;

    @media (max-width: 768px) {
        max-height: 300px;
    }

`;

export const BasicCharacteristics = styled.div`
    display: flex;
    flex-flow: row wrap;

    gap: 16px;
    margin-top: 32px;

    & > div > p {
        font-size: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;

        text-transform: lowercase;
    }

    @media (max-width: 900px){
        width: 37.5vw;
    }

    @media (max-width: 768px){
        width: 100%;
        margin-top: 32px;

        & > p {
            font-size: 18px;

            margin-bottom: 12px;
            gap: 12px;
        }  
    }

`;

const iconCSS = css`
    flex-shrink: 0;

    height: 32px;
    width: 32px;

    fill: var(--text-black);
    color: var(--text-black);

    margin-right: 12px;
`;
export const ReturnIcon = styled(ReturnDownBack)`
    ${iconCSS}

    margin-bottom: 16px;
`;
export const HeightIcon = styled(Height)`${iconCSS}`;
export const WeightIcon = styled(WeightHanging)`${iconCSS}`;
export const StarsIcon = styled(Stars)`${iconCSS}`;

export const Abilities = styled.div`
    margin-top: 32px;
    width: 100%;

    & h2 {
        font-size: 28px;
        margin-bottom: 8px;
    }

    & ul {
        font-size: 20px;
        list-style: inside;
        list-style-type: square;
    }

    @media (max-width: 900px){
        width: 37.5vw;
    }

    @media (max-width: 768px){
        width: 100%;

        & h2 {
            font-size: 24px;
        }

        & ul {
            font-size: 18px;
        }
    }

`;

export const Box = styled.div`
    background-color: #FFF6;
    padding: 16px;
    border-radius: 16px;

    -webkit-box-shadow: 4px 2px 7px -2px rgba(0,0,0,0.3); 
    box-shadow: 4px 2px 7px -2px rgba(0,0,0,0.3);
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 48px;
    overflow-x: auto;
    min-height: fit-content;

    & > h2 {
        font-size: 32px;
        margin-bottom: 32px;
        margin-top: calc(32px + 16px + 22px + ((55px - 37px)/2))
    }

    & > table {
        max-width: 100%;
    }

    & > table > tr + tr td {
        padding-top: 12px;
    }
`;

export const Gallery = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 48px;
    padding-top: 32px;
    overflow-x: auto;

    & > h2 {
        font-size: 32px;
        margin-bottom: 32px;
    }
`;

export const Photos = styled.div`
    flex-flow: row wrap;
    max-height: 375px;

    overflow-y: scroll;

    & > img {
        width: 150px;
    }

    @media (max-width: 768px) {
        max-height: unset;
        overflow-y: visible;

        & > img {
            width: 128px;
        }
    }
`;