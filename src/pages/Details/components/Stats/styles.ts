import styled from 'styled-components';

export const Container = styled.div`
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

    & > table > tbody > tr + tr td {
        padding-top: 8px;
    }
`;