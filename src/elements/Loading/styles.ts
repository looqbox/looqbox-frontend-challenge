import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.6);
`;

export const Gif = styled.img`
    width: 50px;
`;