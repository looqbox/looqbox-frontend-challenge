import styled from 'styled-components';

export const ContainerCard = styled.div`
    padding-top: 20px;
    width: 70%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    min-height: 400px;
`;

export const ButtonPrevNext = styled.button`
    background-color: ${props => (props.isNext ? '#008aff' : '#ff4600')};
    color: #fff;
    padding: 10px;
    border-radius: 20%;
    font-size: 30px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;



export default ContainerCard;