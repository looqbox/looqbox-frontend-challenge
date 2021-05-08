import styled from 'styled-components';

export const HeaderSec = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    height: 162px;
    background-color: orange;
    width: 100%;
    flex-direction: column;

    a > h1 {
      color: #fff;
    }
`;

export const HeaderSearch = styled.div`
    display: flex;
    position: relative;
    flex-direction: row-reverse;
`;



export const HeaderTitle = styled.h1`
    display: flex;
    color: #fff;
`;



export default HeaderSec;