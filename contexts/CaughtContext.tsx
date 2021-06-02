import React, { createContext, useContext, useState } from 'react';

type PokemonProps = {
  number: string;
  name: string;
  image: string;
};

type ContextProps = {
  capturedPokemons: PokemonProps[];
  catchPokemon: (pokemon: PokemonProps) => void;
  releasePokemon: (id: string) => void;
  totalCaptured: number;
};

const CaughtContext = createContext<ContextProps | null>(null);

export const useCaught = () => useContext(CaughtContext);

export const CaughtProvider: React.FC = ({ children }) => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [totalCaptured, setTotalCaptured] = useState<number>(0);

  const catchPokemon = newPokemon => {
    const alreadyCaptured = capturedPokemons.some(
      p => p.name === newPokemon[0].name
    );

    if (alreadyCaptured) {
      alert('you already have that pokemon');
      return;
    }

    if (window.confirm('Capture Pokemon')) {
      setCapturedPokemons([...capturedPokemons, ...newPokemon]);
    }
  };

  const releasePokemon = () => {};

  return (
    <CaughtContext.Provider
      value={{ capturedPokemons, catchPokemon, releasePokemon, totalCaptured }}>
      {children}
    </CaughtContext.Provider>
  );
};
