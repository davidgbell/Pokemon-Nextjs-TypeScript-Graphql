import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from './Pokemon';

type Props = {
  pokemons: any[];
};

export const Pokedex = ({ pokemons }: Props) => {
  return (
    <div className='pokedex'>
      {pokemons.map(pokemon => (
        <Pokemon pokemon={pokemon} key={pokemon.number} />
      ))}
    </div>
  );
};
