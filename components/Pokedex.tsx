// type PokedexProps = {
//     name: string
// }

export const Pokedex = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
};
