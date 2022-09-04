import React from 'react';

import { Container } from './styles';

interface Props {
    type: string | undefined;
}
const Type:React.FC<Props> = ({type}) => {
    return(
        <Container className={type}>
            <b>{type}</b>
        </Container>
    );
}

export default Type;