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

type CaughtProviderProps = {
  children: React.ReactNode;
};

export const CaughtProvider: React.FC<CaughtProviderProps> = ({ children }) => {
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
      alert(`You already have caught ${newPokemon[0].name}`);
      return;
    }

    if (window.confirm(`Catch ${newPokemon[0].name}?`)) {
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

  const releasePokemon = (id: string) => {
    if (window.confirm(`Do you want to release ${id} to the wild?`)) {
      setCapturedPokemons(
        capturedPokemons.filter((p: PokemonProps) => p.name !== id)
      );

      alert(`${id} has been released. You can now catch another pokemon.`);
    } else {
      return;
    }
  };

  return (
    <CaughtContext.Provider
      value={{ catchPokemon, capturedPokemons, releasePokemon }}>
      {children}
    </CaughtContext.Provider>
  );
};
