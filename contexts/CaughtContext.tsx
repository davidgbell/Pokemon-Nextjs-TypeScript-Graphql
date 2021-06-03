import React, { createContext, useContext, useEffect, useState } from 'react';

type PokemonProps = {
  number: string;
  name: string;
  image: string;
};

type ContextProps = {
  capturedPokemons: PokemonProps[];
  catchPokemon: (newPokemon: PokemonProps[]) => void;
  releasePokemon: (id: string) => void;
};

const CaughtContext = createContext<ContextProps>({
  capturedPokemons: [],
  catchPokemon: () => undefined,
  releasePokemon: () => undefined,
});

export const useCaught = () => useContext(CaughtContext);

export const CaughtProvider: React.FC<ContextProps> = ({ children }) => {
  const [capturedPokemons, setCapturedPokemons] = useState<any>([]);

  const catchPokemon = (newPokemon: PokemonProps[]) => {
    if (capturedPokemons.length >= 6) {
      alert('You cannot carry any more Pokemon.');
      return;
    }

    const alreadyCaptured = capturedPokemons.some(
      (p: PokemonProps) => p.name === newPokemon[0].name
    );

    if (alreadyCaptured) {
      alert('you already have that pokemon');
      return;
    }

    if (window.confirm('Capture Pokemon')) {
      setCapturedPokemons([...capturedPokemons, ...newPokemon]);
    }
  };

  useEffect(() => {
    const localPokemons = localStorage.getItem('capturedPokemons');

    if (localPokemons) {
      setCapturedPokemons(JSON.parse(localPokemons));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('capturedPokemons', JSON.stringify(capturedPokemons));
  }, [capturedPokemons]);

  // TODO
  const releasePokemon = () => {};

  return (
    <CaughtContext.Provider
      value={{ catchPokemon, capturedPokemons, releasePokemon }}>
      {children}
    </CaughtContext.Provider>
  );
};
