import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';

export const StatName = styled.td`
    & > h3 {
        font-size: 20px;
        color: var(--text-black);

        text-align: left;

        white-space: nowrap;
        text-overflow: ellipsis;

        @media (max-width: 768px){
            & {
                font-size: 18px;
            }
        }
    }
`;

export const StatValue = styled.td`
    & > h3 {
        opacity: 0.75;
        text-align: right;

        margin-left: 8px;

        @media (max-width: 768px){
            & {
                font-size: 18px;
            }
        }
    }
`;

export const StatBar = styled.td`
    width: 100%;
`;

export const Bar = styled(ProgressBar)`
    
    width: 100%;
    max-width: 100%;
    margin-left: 8px;

    background-color: #FFF;
    border: 1px solid var(--stroke);
    border-radius: 4px;

    & > div {
        height: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;

        & > div {
            height: 18px;
        }
    }

    .hp-bar {
        background-color: var(--hp);
    }

    .attack-bar {
        background-color: var(--attack);
    }

    .defense-bar {
        background-color: var(--defense);
    }

    .special-attack-bar {
        background-color: var(--special-attack);
    }

    .special-defense-bar {
        background-color: var(--special-defense);
    }

    .speed-bar {
        background-color: var(--speed);
    }
`;