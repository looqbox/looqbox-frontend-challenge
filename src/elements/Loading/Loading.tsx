import React from 'react';
import loadingGif from '../../assets/loading.gif';

import { Container, Gif } from './styles';

const Loading:React.FC = () => {

    return(
        <Container>
            <Gif src={loadingGif} alt="Loading gif" />
        </Container>
    );
}

export default Loading;