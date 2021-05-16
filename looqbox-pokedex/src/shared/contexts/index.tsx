import React, { ReactNode } from 'react';
import { PokeProvider } from './pokemon';

interface ContextsProps {
  children: ReactNode;
}

const Contexts = ({ children }: ContextsProps) => (
  <PokeProvider>{children}</PokeProvider>
);

export default Contexts;
