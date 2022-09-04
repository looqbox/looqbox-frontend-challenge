import styled, { css } from "styled-components";
import { Height, ReturnDownBack, Stars, WeightHanging } from '../../../../styles/Icons';

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