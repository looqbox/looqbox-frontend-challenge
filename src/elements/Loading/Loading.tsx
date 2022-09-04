import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

import { Container } from './styles';

const Loading:React.FC = () => {


    return(
        <Container>
            <Spinner animation="border" />
        </Container>
    );
}

export default Loading;