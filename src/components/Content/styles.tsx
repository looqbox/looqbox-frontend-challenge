import styled from 'styled-components';
import { Input, Layout } from 'antd';

const { Search } = Input;
const { Content } = Layout;

export const pokemonBgColor: Record<string, string> = {
    "bug": "#8bd674",
    "dark": "#6f6e78",
    "dragon": "#7383b9",
    "electric": "#f2cb55",
    "fairy": "#eaa4c0",
    "fighting": "#f76285",
    "fire": "#ffa756",
    "flying": "#83a2e3",
    "ghost": "#8a7ead",
    "grass": "#8bbe8a",
    "ground": "#f78551",
    "ice": "#91d8df",
    "normal": "#bcbcbc",
    "poison": "#9f6e97",
    "psychic": "#ff6568",
    "rock": "#d4c294",
    "steel": "#8ca2ad",
    "water": "#58abf6",
};

export const accessPokemonBgColor = (str: string) => {
    return pokemonBgColor[str];
};

export const StyledContent = styled(Content)`
    background-color: #fff !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
`;

export const StyledSearch = styled(Search)`
    background-color: #fff;
    line-height: 80px;
    color: #fff;
`;

export const StyledMain = styled.main`
    background-color: #fff;

    .loading-spin {
        margin: 20px 0;
        margin-bottom: 20px;
        padding: 30px 50px;
        text-align: center;
        background: #fff;
        color: #1677ff;
        border-radius: 4px;
    }
`;

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem 2rem;
    background-color: #fff;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: center;
    margin-bottom: 40px;
    align-items: stretch;
    grid-auto-rows: 400px;
`;

export const StyledCard = styled.div<{ singleCard?: boolean, type: string }>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 20px;
    border-radius: 1rem;
    padding: 2rem;
    cursor: pointer;
    color: #fff;
    box-shadow: 10px 10px 20px rgba(43, 48, 43, 0.26);
    background-image: url(${require('../../assets/pattern.png')}),
        url(${require('../../assets/pokeball.png')});
    background-size: 5rem, 30%;
    background-position: top 12px right 12px, bottom 10px left 10px;
    background-repeat: no-repeat;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }

    ${({ singleCard }) => singleCard && `
        width: 300px;
    `}

    ${({ type }) => type && `
        background-color: ${accessPokemonBgColor(type)};
    `}
`;

export const StyledSpan = styled.span`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    margin-bottom: -40px;
    color: rgba(23, 23, 27, 0.6);
`;

export const StyledH3 = styled.h3`
    font-size: 26px;
    margin-bottom: 5px;
    text-align: center;
    margin-bottom: -10px;
    margin-top: -2px;

    &::first-letter {
        text-transform: uppercase;
    }
`;

export const StyledElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        height: 100%;
    }
`;

export const StyledPokemon = styled.img`
    width: 90%;
    height: 90%;
    max-width: 200px;
    min-width: 100px;
    max-height: 220px;
    min-height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    object-fit: contain;
    justify-self: center;
`;

export const AboutInfoText = styled.div`
display: flex;
    text-align: justify;
    flex-direction: row;
    justify-content: center;
    color: rgba(116, 116, 118, 1);
    font-size: 16px;
    line-height: 15px;
    margin-top: 0px;
    margin-bottom: 10px;
`;
