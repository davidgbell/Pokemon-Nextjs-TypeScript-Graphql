import Image from 'next/image';
import Link from 'next/link';
import { useCaught } from '../contexts/CaughtContext';

type PokemonProps = {
  name: string;
  number: string;
  image: string;
  types: string[];
  id: string;
};

type Props = {
  pokemon: PokemonProps;
  isCaught: boolean;
};

export const Pokemon = ({ pokemon, isCaught }: Props) => {
  const { releasePokemon } = useCaught();

  return (
    <div>
      <div className='pokemon'>
        <Link href={`/pokemon/${pokemon.name}`} passHref>
          <a>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.number}</p>
            <div className='pokemon-image'>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
            </div>
            <ul>
              {pokemon.types.map(type => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </a>
        </Link>
        {isCaught && (
          <div>
            <button onClick={() => releasePokemon(pokemon.name)}>
              Release
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
