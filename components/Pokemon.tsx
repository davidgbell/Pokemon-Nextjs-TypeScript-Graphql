import Image from 'next/image';
import Link from 'next/link';

type PokemonProps = {
  name: string;
  number: string;
  image: string;
  types: string[];
  id: string;
};

type Props = {
  pokemon: PokemonProps;
};

export const Pokemon = ({ pokemon }: Props) => {
  return (
    <div>
      {' '}
      <Link href={`/pokemon/${pokemon.name}`} passHref>
        <a>
          <div className='pokemon'>
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
          </div>
        </a>
      </Link>
    </div>
  );
};
