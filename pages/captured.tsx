import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { Pokedex } from '../components/Pokedex';
import { useCaught } from '../contexts/CaughtContext';

const Captured = () => {
  const { capturedPokemons } = useCaught();

  console.log(capturedPokemons.length);

  return (
    <Layout title='Captured Pokemons'>
      {capturedPokemons.length > 0 ? (
        <Pokedex pokemons={capturedPokemons} />
      ) : (
        <h2>Nothing captured</h2>
      )}
    </Layout>
  );
};

export default Captured;
