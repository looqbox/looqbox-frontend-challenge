import styled from 'styled-components';

export const CardStyled = styled.div`
    background: linear-gradient(-218deg,#275b67 87%,#ffffff 99%);
    border-radius: 14px;
    color: #fff;
    box-shadow: 5px 6px 5px #0000008f;
    margin: 15px;
    height: 500px;
    position: relative;

    :hover {
        position: relative;
        top: -20px;
    }
`;

export const CardTypes = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

export const CardType = styled.div`
    padding: 5px 10px;
    margin: 10px 10px 10px 0;
    border-radius: 5px;
    background: #1a9dff;
    color: #fff;
`;

export const CardName = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
`;

export const CardInfo = styled.div`
    text-align: center;
    padding: 20px;
`;

export const CardImg = styled.div`
    text-align: center;
    background: #1a3f48;
    border-radius: 14px 14px 0px 0px;
`;


export default CardStyled;