import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { useSessionStorage, useEventListener } from 'usehooks-ts';

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useSessionStorage('pokemon', initialPokemon);
  const [page, setPage] = useSessionStorage('page', 1);
  const [offset, setOffet] = useSessionStorage('offset', 0);

  const nextPokemon = async (url) => {
    setPage((x) => x + 1);
    setOffet((x) => x + 20);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset + 20}`
    );
    const nextPokemon = await response.json();

    setPokemon(nextPokemon);
  };
  const prevPokemon = async (url) => {
    setPage((x) => x - 1);
    setOffet((x) => x - 20);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset + 20}`
    );
    const nextPokemon = await response.json();

    setPokemon(nextPokemon);
  };
  const refresh = (e) => {
    setPage(1);
    setOffet(0);
    setPokemon(initialPokemon);
  };
  useEventListener('beforeunload', refresh);
  return (
    <Layout title={'PokeDev'}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {pokemon.results.map((monster, index) => (
          <Pokemon key={index} pokemon={monster} index={index + offset} />
        ))}
      </div>

      <div className="my-8 flex justify-center gap-5">
        <button
          disabled={page == 1}
          className="disabled:bg-gray-500 px-3 py-1 bg-slate-900"
          onClick={() => prevPokemon()}
        >
          prev
        </button>
        you are in page {page}
        <button
          className="disabled:bg-gray-500 px-3 py-1 bg-slate-900"
          onClick={() => nextPokemon()}
        >
          next
        </button>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const initialPokemon = await response.json();

  return {
    props: {
      initialPokemon,
    },
  };
}
