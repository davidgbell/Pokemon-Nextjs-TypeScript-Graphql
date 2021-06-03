import { useEffect, useState } from 'react';
import { useCaught } from '../contexts/CaughtContext';
import { Pokemon } from './Pokemon';

type PokemonProps = {
  number: string;
  name: string;
  image: string;
};

type Props = {
  pokemons: any[];
};

export const Pokedex = ({ pokemons }: Props) => {
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

  return (
    <div className='pokedex'>
      {pokemons.map(pokemon => (
        <Pokemon pokemon={pokemon} key={pokemon.number} isCaught={isCaught} />
      ))}
    </div>
  );
};
