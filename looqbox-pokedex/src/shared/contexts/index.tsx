import React, { ReactNode } from 'react';
import { PokeProvider } from './poke';

interface ContextsProps {
  children: ReactNode;
}

const Contexts = ({ children }: ContextsProps) => (
  <PokeProvider>{children}</PokeProvider>
);

export default Contexts;
