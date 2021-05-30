import Image from 'next/image';
export const Pokedex = ({ pokemons }) => {
  return (
    <div className='pokedex'>
      {pokemons.map(pokemon => (
        <div className='pokemon'>
          <h3>{pokemon.name}</h3>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={300}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};
