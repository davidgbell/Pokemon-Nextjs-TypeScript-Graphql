import React, { MouseEvent } from 'react';

type Props = {
  term: string;
  handleFilterButtonChange: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const PokemonTypeButtons = ({
  term,
  handleFilterButtonChange,
}: Props) => {
  const pokemonTypes = [
    'grass',
    'water',
    'fire',
    'poison',
    'flying',
    'bug',
    'normal',
    'electric',
    'ground',
    'fairy',
    'fighting',
    'psychic',
    'steel',
    'ice',
    'rock',
  ];

  return (
    <div>
      <button value='' onClick={handleFilterButtonChange}>
        all
      </button>
      {pokemonTypes.map(type => (
        <button key={type} value={type} onClick={handleFilterButtonChange}>
          {type}
        </button>
      ))}
    </div>
  );
};
