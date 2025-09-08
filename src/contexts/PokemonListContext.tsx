/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

interface PokemonListContextProps {
  page: number;
  setPage: (page: number) => void;
  showSize: number;
  setShowSize: (size: number) => void;
}

const PokemonListContext = createContext<PokemonListContextProps | undefined>(
  undefined
);

export const PokemonListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState(0);
  const [showSize, setShowSize] = useState(20);

  return (
    <PokemonListContext.Provider
      value={{
        page,
        setPage,
        showSize,
        setShowSize,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

export const usePokemonListContext = () => {
  const ctx = useContext(PokemonListContext);
  if (!ctx)
    throw new Error(
      'usePokemonListContext must be used within PokemonListProvider'
    );
  return ctx;
};
