import Image from 'next/image';
import Link from 'next/link';
export const Pokedex = ({ pokemons }) => {
  return (
    <div className='pokedex'>
      {pokemons.map(pokemon => (
        <Link href='/' passHref>
          <a>
            <div className='pokemon'>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.number}</p>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <ul>
                {pokemon.types.map(type => (
                  <li>{type}</li>
                ))}
              </ul>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
