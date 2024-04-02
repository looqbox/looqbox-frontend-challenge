import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: left;
    padding-bottom: 40px;
`;

export const StyledH4 = styled.h4`
    color: #1677ff;
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;
    text-align: left;
    justify-content: center;
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 25px;
`;

export const StyledContent = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: self-start;
    max-width: 100%;

    div {
        color: rgba(23, 23, 27, 1);
        font-weight: 700;
        line-height: 38px;
        text-transform: capitalize; /* Aqui é onde você adiciona a transformação */
    }
`;
