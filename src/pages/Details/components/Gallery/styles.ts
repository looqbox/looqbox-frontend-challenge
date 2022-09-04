import styled from 'styled-components';

export const Container = styled.div`
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