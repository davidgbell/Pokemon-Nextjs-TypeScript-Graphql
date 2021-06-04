import gql from 'graphql-tag';
import { GetStaticProps } from 'next';
import client from '../apollo-client';
import { Layout } from '../components/Layout';
import { Pokedex } from '../components/Pokedex';

type Props = {
  pokemons: [];
};

export default function Home({ pokemons }: Props) {
  return (
    <Layout title='Pokemons'>
      <div>
        <main>
          <h1>hello world</h1>
          <Pokedex pokemons={pokemons} />
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query pokemonQuery {
        pokemons(first: 152) {
          id
          number
          name
          image
          types
        }
      }
    `,
  });

  const pokemons = await data.pokemons;

  return {
    props: {
      pokemons,
    },
  };
};
