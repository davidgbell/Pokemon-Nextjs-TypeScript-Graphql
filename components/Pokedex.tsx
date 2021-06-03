import React, { useEffect, useState } from 'react';
import { useCaught } from '../contexts/CaughtContext';
import { Pokemon } from './Pokemon';
import { Search } from './Search';

type PokemonProps = {
  number: string;
  name: string;
  image: string;
};

type Props = {
  pokemons: any[];
};

export const Pokedex = ({ pokemons }: Props) => {
  const [term, setTerm] = useState('');

  const [isCaught, setIsCaught] = useState<boolean>(false);

  const { capturedPokemons } = useCaught();

  const checkIfCaught = (a: PokemonProps[], b: PokemonProps[]) => {
    if (a === b) {
      setIsCaught(true);
    } else {
      setIsCaught(false);
    }
  };

  useEffect(() => {
    checkIfCaught(capturedPokemons, pokemons);
  }, []);

  const handleTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTerm(event.target.value);
  };

  const filteredPokemon = pokemons.filter(p =>
    p.name.toLowerCase().includes(term.toLocaleLowerCase())
  );

  return (
    <>
      <Search term={term} handleTermChange={handleTermChange} />
      <div className='pokedex'>
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map(pokemon => (
            <Pokemon
              pokemon={pokemon}
              key={pokemon.number}
              isCaught={isCaught}
            />
          ))
        ) : (
          <h2>
            There are no Pokemon matching your search query please try something
            else
          </h2>
        )}
      </div>
    </>
  );
};
