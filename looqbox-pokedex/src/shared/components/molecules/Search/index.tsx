import React, { useCallback } from 'react';

import Input from 'shared/components/atoms/Input';
import Button from 'shared/components/atoms/Button';

import { Container } from './styles';

import { SearchProps } from './types';

const SearchBar = ({ onSearch, ...rest }: SearchProps) => {
  const handleClick = useCallback(() => {
    if (onSearch) onSearch();
  }, [onSearch]);

  return (
    <Container>
      <Input placeholder="Pesquisar..." {...rest}>
        <Button maxSize="120px" width="100%" onClick={handleClick}>
          Buscar
        </Button>
      </Input>
    </Container>
  );
};

export default SearchBar;
