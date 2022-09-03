import styled, { css } from "styled-components";
import { Height, Stars, WeightHanging } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 900px){
        flex-direction: column;
    }
`;

export const Main = styled.div`
    position: relative;

    flex-direction: column;
    height: 100vh;
    width: fit-content;
    padding: 48px;

    @media (max-width: 900px) {
        height: auto;
        width: 100vw;
    }

    & > span {
        font-size: 20px;
    }

    & > h1 {
        font-size: 48px;
    }

    @media (max-width: 768px) {
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
    z-index: 2;
    max-width: 350px;

    margin-top: 16px;
    
    @media (min-width: 1280px) {
        max-width: 350px;
    }

    @media (max-width: 768px) {
        z-index: unset;
        order: -7;
        max-height: 300px;
    }

`;

export const BasicCharacteristics = styled.div`
    display: flex;
    flex-flow: row wrap;

    margin-top: 32px;

    & > p {
        font-size: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 16px;
        margin-right: 16px;
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
            margin-right: 12px;
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
