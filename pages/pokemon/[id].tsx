import gql from 'graphql-tag';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import client from '../../apollo-client';
import { Layout } from '../../components/Layout';

type PokemonProps = {
  name: string;
  number: string;
  classification: string;
  height: {
    maximum: string;
  };
  weight: {
    maximum: string;
  };
  image: string;
  maxHP: number;
  types: string[];
  attacks: {
    fast: [
      {
        name: string;
        damage: number;
      }
    ];
  };
  evolutions: [
    {
      name: string;
      image: string;
    }
  ];
  evolutionRequirements: {
    amount: number;
    name: string;
  };
};

type Props = {
  pokemon: PokemonProps;
};

const PokemonPage = ({ pokemon }: Props) => {
  return (
    <Layout title={pokemon.name}>
      <Link href='/'>Back home</Link>
      <h1>Pokemon Info</h1>
      <h2>{pokemon.name}</h2>
      <p>#{pokemon.number}</p>
      <p>{pokemon.classification}</p>
      <p>HT {pokemon.height.maximum}</p>
      <p>WT {pokemon.weight.maximum}</p>
      <Image src={pokemon.image} width={200} height={200} />
      <h3>HP: {pokemon.maxHP}</h3>
      <div>
        <h4>Types</h4>
        <ul>
          {pokemon.types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Attacks</h4>
        <ul>
          {pokemon.attacks.fast.map(attack => (
            <li key={attack.name}>
              <p>{attack.name}</p>
              <p>Damage: {attack.damage}</p>
            </li>
          ))}
        </ul>
      </div>
      {pokemon.evolutions && (
        <div>
          <h4>Evolutions</h4>
          <ul>
            {pokemon.evolutions.map(evolution => (
              <li key={evolution.name}>
                <h5>{evolution.name}</h5>
                <Image
                  src={evolution.image}
                  width={100}
                  height={100}
                  alt={evolution.name}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {pokemon.evolutionRequirements && (
        <div>
          <h4>Evolution requirements</h4>
          <p>amount: {pokemon.evolutionRequirements.amount}</p>
          <p>name: {pokemon.evolutionRequirements.name}</p>
        </div>
      )}
    </Layout>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query PATHS {
        pokemons(first: 151) {
          name
        }
      }
    `,
  });

  type PathsProps = {
    name: string;
  };

  const paths = await data.pokemons.map((poke: PathsProps) => ({
    params: {
      id: poke.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
              query POKEMON {
                pokemon(name: "${params?.id}") {
                    name
                    number
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
              name
              image
            }
            types
            maxHP
            image
                }
              }
            `,
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
};

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

//   console.log(data);

//   return {
//     props: {
//       pokemon: data.pokemon,
//     },
//   };
// };
