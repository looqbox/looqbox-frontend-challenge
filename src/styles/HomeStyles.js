import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 70%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
`;

export const ButtonPrevNext = styled.button`
    background-color: ${props => (props.isNext ? '#008aff' : '#ff4600')};
    color: #fff;
`;


export default ContainerCard;