import Layout from '../components/Layout';
import { useState } from 'react';
import Pokemon from '../components/Pokemon';
import { proxy, useSnapshot } from 'valtio';
const state = proxy({
  offset: 0,
  page: 1,
});
const nextPage = () => {
  state.offset += 20;
  state.page += 1;
};
const prevPage = () => {
  state.offset -= 20;
  state.page -= 1;
};
export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const snap = useSnapshot(state);
  //   const currentPage =
  //     snap.offset == 0
  //       ? initialPokemon.results
  //       : pokemon.results.slice(snap.offset, snap.offset + 20);

  //   const [offset, setOffet] = useState(0);

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url);
    const nextPokemon = await response.json();
    if (next) {
      nextPage();
      setPokemon(nextPokemon);
    } else {
      prevPage();
      setPokemon(nextPokemon);
    }
  };

  return (
    <Layout title={'PokeDev'}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {pokemon.results.map((monster, index) => (
          <Pokemon key={index} pokemon={monster} index={index + snap.offset} />
        ))}
      </div>

      <div className="my-8 flex justify-center gap-5">
        <button
          disabled={snap.page <= 1}
          className="disabled:bg-gray-500 px-3 py-1 bg-slate-900"
          onClick={() => fetchPokemon(pokemon.previous, false)}
        >
          prev
        </button>
        <button
          disabled={!pokemon.next}
          className="disabled:bg-gray-500 px-3 py-1 bg-slate-900"
          onClick={() => fetchPokemon(pokemon.next, true)}
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
