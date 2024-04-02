import styled from 'styled-components';
import whiteDots from '../../assets/pattern-2.png';
import pokeball from '../../assets/pokeball-2.png';
import { accessPokemonBgColor } from '../../components/Content/styles';

export const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    color: #fff;
    padding-bottom: 10px;
`;

export const DetailsHeaderWrapper = styled.section<{ type: string }>`
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 210px;

    ${({ type }) => type && `
    background-color: ${accessPokemonBgColor(type)};
`}
`;

export const DetailsHeader = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: -2rem;
    padding-top: 2rem;
    background: url(${whiteDots}), url(${pokeball}); 
    background-size: 4rem, 12%;
    background-position: top 0px right 32%, top 70% left 37%;
    background-repeat: no-repeat;

    h3 {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    span:first-child {
        font-weight: 500;
        font-size: 14px;
        text-align: left;
        margin-bottom: 10px;
        color: rgba(45, 45, 49, 0.8);
    }

    span:last-child {
        font-weight: 700;
        font-size: 24px;
        text-align: left;
        color: #fff;
        margin-left: 20px;
    }

    .ant-btn:hover {
        background-color: transparent !important;
    }

    @media screen and (max-width: 425px) {
        background: url(${whiteDots}), url(${pokeball}); 
        background-size: 4rem, 20%;
        background-position: top 0px right 32%, top 70% left 15%;
        background-repeat: no-repeat;
    }
`;

export const DetailsInfo = styled.div`
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    gap: 30px;
`;

export const DetailsImage = styled.div`
    img {
        width: 90%;
        height: 200px;
        max-width: 150px;
        min-width: 50px;
        max-height: 80%;
        min-height: 100px;
        object-fit: contain;
    }
`;

export const DetailsText = styled.div`
    margin-top: 10px;
    font-size: 20px;
`;

export const DetailsContent = styled.div`
    .loading-spin {
        margin: 85px 0;
        margin-bottom: 20px;
        padding: 30px 50px;
        text-align: center;
        background: #fff;
        color: #1677ff;
        border-radius: 4px;
    }

    h3 {
        &::first-letter {
            text-transform: uppercase;
        }
    }
`;

export const DetailsBodyWrapper = styled.section`
    max-width: 600px;
    margin: 0 auto;

    @media screen and (min-width:1px) and (max-width:600px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

export const StyledElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        height: 25px;
    }
`;
