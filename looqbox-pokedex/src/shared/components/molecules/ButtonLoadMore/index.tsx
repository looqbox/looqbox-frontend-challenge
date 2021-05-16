import React, { useCallback } from 'react';

import { Container } from './styles';

interface ButtonLoadMoreProps {
  onLoad: Function;
  isLoading: boolean;
}

const ButtonLoadMore = ({ onLoad, isLoading }: ButtonLoadMoreProps) => {
  const handleLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <Container>
      <button type="button" onClick={handleLoad}>
        {isLoading ? (
          <>
            <div className="load" />
            Carregando
          </>
        ) : (
          'Carregar mais'
        )}
      </button>
    </Container>
  );
};

export default ButtonLoadMore;
