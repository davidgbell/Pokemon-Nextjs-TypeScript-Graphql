import gql from 'graphql-tag';
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import client from '../../apollo-client';
import { Layout } from '../../components/Layout';

const PokemonPage = ({ pokemon }) => {
  return (
    <Layout>
      <Link href='/'>Back home</Link>
      <h1>Pokemon Info</h1>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.classification}</p>
      <p>HT {pokemon.height.maximum}</p>
      <p>WT {pokemon.weight.maximum}</p>
      <Image src={pokemon.image} width={200} height={200} />
      <h3>HP: {pokemon.maxHP}</h3>
      <div>
        <h4>Types</h4>
        <ul>
          {pokemon.types.map(type => (
            <li>{type}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Attacks</h4>
        <ul>
          {pokemon.attacks.fast.map(attack => (
            <li>
              <p>{attack.name}</p>
              <p>Damage: {attack.damage}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Evolutions</h4>
        <ul>
          {pokemon.evolutions.map(evolution => (
            <li>{evolution.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Evolution requirements</h4>
        <p>amount: {pokemon.evolutionRequirements.amount}</p>
        <p>name: {pokemon.evolutionRequirements.name}</p>
      </div>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query PATHS {
        pokemons(first: 151) {
          id
        }
      }
    `,
  });
};

export const getStaticProps: GetStaticProps = async ({ query }) => {
  console.log(query);

  const { data } = await client.query({
    query: gql`
        query POKEMON {
          pokemon(name: "${query.id}") {
              classification
              evolutionRequirements {
              amount
              name
              }
              height {
                  maximum
               }
          weight {
              maximum
              }
      attacks {
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
      }
      types
      maxHP
      image
          }
        }
      `,
  });

  // export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  //   console.log(query);

  //   const { data } = await client.query({
  //     query: gql`
  //       query POKEMON {
  //         pokemon(name: "${query.id}") {
  //             classification
  //             evolutionRequirements {
  //             amount
  //             name
  //             }
  //             height {
  //                 maximum
  //              }
  //         weight {
  //             maximum
  //             }
  //     attacks {
  //       fast {
  //         name
  //         type
  //         damage
  //       }
  //     }
  //     evolutions {
  //       id
  //       name
  //     }
  //     types
  //     maxHP
  //     image
  //         }
  //       }
  //     `,
  //   });

  console.log(data);

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
};
