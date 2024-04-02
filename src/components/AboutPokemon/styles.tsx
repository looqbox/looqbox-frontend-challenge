import styled from 'styled-components';

export const AboutInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: left;
    width: auto;
`;

export const Heading = styled.h4`
    color: #1677ff;
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;
    text-align: left;
`;

export const AboutTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    line-height: 42px;
`;

export const TableItem = styled.div`
    margin: 2px;
    padding: 5px;
    text-align: left;
`;

export const TableKey = styled.div`
    color: rgba(23, 23, 27, 1);
    font-weight: 700;
    diplay: flex !important;
`;

export const TableValue = styled.div`
    color: rgba(116, 116, 118, 1);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: auto;

    .pokemon-types {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    img {
        margin: 5px;
    }
`;
