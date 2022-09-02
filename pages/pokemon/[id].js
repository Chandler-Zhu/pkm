import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from 'next-auth/react';
const SlTooltip = dynamic(
  () =>
    import('../../node_modules/@shoelace-style/shoelace/dist/react').then(
      (mod) => mod.SlTooltip
    ),
  {
    ssr: false,
  }
);
const Pokemon = ({ pokemon }) => {
  const { data: session } = useSession();
  const pokeIndex = ('000' + pokemon.id).slice(-3);
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <SlTooltip key={type.slot}>
        <div slot="content" className="p-2">
          <p className="text-base inline-flex">
            <span className="shrink-0 mr-2">Double damage from: </span>
            {type.type.name == 'normal' && (
              <b className="text-red-600"> fighting</b>
            )}
            {type.type.name == 'flying' && (
              <span>
                <b className="text-yellow-700"> rock</b>
                <b className="text-cyan-400"> ice</b>
                <b className="text-yellow-500"> electric</b>
              </span>
            )}
            {type.type.name == 'rock' && (
              <span>
                <b className="text-yellow-800"> ground</b>
                <b className="text-red-600"> fighting</b>
                <b className="text-zinc-500"> steel</b>
                <b className="text-cyan-600"> water</b>
                <b className="text-green-600"> grass</b>
              </span>
            )}
            {type.type.name == 'ground' && (
              <span>
                <b className="text-cyan-600"> water</b>
                <b className="text-cyan-400"> ice</b>
                <b className="text-green-600"> grass</b>
              </span>
            )}
            {type.type.name == 'steel' && (
              <span>
                <b className="text-yellow-800"> ground</b>
                <b className="text-red-600"> fighting</b>
                <b className="text-orange-600"> fire</b>
              </span>
            )}
            {type.type.name == 'dark' && (
              <span>
                <b className="text-red-600"> fighting</b>
                <b className="text-lime-600"> bug</b>
                <b className="text-red-400"> fairy</b>
              </span>
            )}
            {type.type.name == 'ghost' && (
              <span>
                <b className="text-violet-400"> ghost</b>
                <b className="text-zinc-600"> dark</b>
              </span>
            )}
            {type.type.name == 'fairy' && (
              <span>
                <b className="text-purple-700"> poison</b>
                <b className="text-zinc-500"> steel</b>
              </span>
            )}{' '}
            {type.type.name == 'dragon' && (
              <span>
                <b className="text-cyan-400"> ice</b>
                <b className="text-red-400"> fairy</b>
                <b className="text-pink-600"> dragon</b>
              </span>
            )}
            {type.type.name == 'ice' && (
              <span>
                <b className="text-yellow-700"> rock</b>
                <b className="text-red-600"> fighting</b>
                <b className="text-zinc-500"> steel</b>
                <b className="text-orange-600"> fire</b>
              </span>
            )}
            {type.type.name == 'electric' && (
              <b className="text-yellow-800"> ground</b>
            )}
            {type.type.name == 'fire' && (
              <span>
                <b className="text-cyan-600"> water</b>
                <b className="text-yellow-800"> ground</b>
                <b className="text-yellow-700"> rock</b>
              </span>
            )}
            {type.type.name == 'grass' && (
              <span>
                <b className="text-cyan-600"> flying</b>
                <b className="text-purple-700"> poison</b>
                <b className="text-lime-600"> bug</b>
                <b className="text-orange-600"> fire</b>
                <b className="text-cyan-400"> ice</b>
              </span>
            )}
            {type.type.name == 'psychic' && (
              <span>
                <b className="text-lime-600"> bug</b>
                <b className="text-violet-400"> ghost</b>
                <b className="text-zinc-600"> dark</b>
              </span>
            )}
            {type.type.name == 'bug' && (
              <span>
                <b className="text-cyan-600"> flying</b>
                <b className="text-orange-600"> fire</b>
                <b className="text-yellow-700"> rock</b>
              </span>
            )}
            {type.type.name == 'poison' && (
              <span>
                <b className="text-fuchsia-600"> psychic</b>
                <b className="text-yellow-800"> ground</b>
              </span>
            )}
            {type.type.name == 'fighting' && (
              <span>
                <b className="text-cyan-600"> flying</b>
                <b className="text-fuchsia-600"> psychic</b>
                <b className="text-red-400"> fairy</b>
              </span>
            )}
            {type.type.name == 'water' && (
              <span>
                <b className="text-green-600"> grass</b>
                <b className="text-yellow-500"> electric</b>
              </span>
            )}
          </p>
          <p className="text-base  inline-flex">
            <span className="shrink-0 mr-2">Double damage to: </span>
            {type.type.name == 'normal' && <b> none</b>}
            {type.type.name == 'grass' && (
              <span>
                <b className="text-cyan-600"> water</b>
                <b className="text-yellow-800"> ground</b>
                <b className="text-yellow-700"> rock</b>
              </span>
            )}
            {type.type.name == 'rock' && (
              <span>
                <b className="text-cyan-600"> flying</b>
                <b className="text-lime-600"> bug</b>
                <b className="text-orange-600"> fire</b>
                <b className="text-cyan-400"> ice</b>
              </span>
            )}
            {type.type.name == 'flying' && (
              <span>
                <b className="text-red-600"> fighting</b>
                <b className="text-lime-600"> bug</b>
                <b className="text-green-600"> grass</b>
              </span>
            )}
            {type.type.name == 'steel' && (
              <span>
                <b className="text-cyan-400"> ice</b>
                <b className="text-red-400"> fairy</b>
                <b className="text-yellow-700"> rock</b>
              </span>
            )}
            {type.type.name == 'dark' && (
              <span>
                <b className="text-violet-400"> ghost</b>
                <b className="text-fuchsia-600"> psychic</b>
              </span>
            )}
            {type.type.name == 'ground' && (
              <span>
                <b className="text-yellow-700"> rock</b>
                <b className="text-purple-700"> poison</b>
                <b className="text-zinc-500"> steel</b>
                <b className="text-orange-600"> fire</b>
                <b className="text-yellow-500"> electric</b>
              </span>
            )}
            {type.type.name == 'ghost' && (
              <span>
                <b className="text-violet-400"> ghost</b>
                <b className="text-fuchsia-600"> psychic</b>
              </span>
            )}
            {type.type.name == 'dragon' && (
              <b className="text-pink-600"> dragon</b>
            )}
            {type.type.name == 'ice' && (
              <span>
                <b className="text-green-600"> grass</b>
                <b className="text-yellow-800"> ground</b>
                <b className="text-sky-700"> flying</b>
                <b className="text-pink-600"> dragon</b>
              </span>
            )}
            {type.type.name == 'fire' && (
              <span>
                <b className="text-green-600"> grass</b>
                <b className="text-zinc-500"> steel</b>
                <b className="text-lime-600"> bug</b>
                <b className="text-cyan-400"> ice</b>
              </span>
            )}
            {type.type.name == 'fairy' && (
              <span>
                <b className="text-zinc-600"> dark</b>
                <b className="text-red-600"> fighting</b>
                <b className="text-pink-600"> dragon</b>
              </span>
            )}
            {type.type.name == 'fighting' && (
              <span>
                <b className="text-slate-500"> normal</b>
                <b className="text-yellow-700"> rock</b>
                <b className="text-cyan-400"> ice</b>
                <b className="text-zinc-600"> dark</b>
              </span>
            )}
            {type.type.name == 'bug' && (
              <span>
                <b className="text-green-600"> grass</b>
                <b className="text-zinc-600"> dark</b>
                <b className="text-fuchsia-600"> psychic</b>
              </span>
            )}
            {type.type.name == 'poison' && (
              <span>
                <b className="text-green-600"> grass</b>
                <b className="text-red-400"> fairy</b>
              </span>
            )}
            {type.type.name == 'water' && (
              <span>
                <b className="text-yellow-800"> ground</b>
                <b className="text-yellow-700"> rock</b>
                <b className="text-orange-600"> fire</b>
              </span>
            )}
            {type.type.name == 'psychic' && (
              <span>
                <b className="text-red-600"> fighting</b>
                <b className="text-purple-700"> poison</b>
              </span>
            )}
            {type.type.name == 'electric' && (
              <span>
                <b className="text-cyan-600"> water</b>
                <b className="text-sky-700"> flying</b>
              </span>
            )}
          </p>
        </div>
        <li
          className={`px-2 py-1 rounded select-none ${
            type.type.name == 'grass' ? 'bg-green-700' : ''
          } ${type.type.name == 'poison' ? 'bg-purple-700' : ''} ${
            type.type.name == 'rock' ? 'bg-yellow-700' : ''
          } ${type.type.name == 'psychic' ? 'bg-fuchsia-700' : ''} ${
            type.type.name == 'normal' ? 'bg-slate-700' : ''
          } ${type.type.name == 'flying' ? 'bg-sky-700' : ''} ${
            type.type.name == 'fire' ? 'bg-orange-600' : ''
          } ${type.type.name == 'bug' ? 'bg-lime-600' : ''} ${
            type.type.name == 'water' ? 'bg-cyan-600' : ''
          } ${type.type.name == 'electric' ? 'bg-yellow-500' : ''} ${
            type.type.name == 'dark' ? 'bg-zinc-800' : ''
          } ${type.type.name == 'fighting' ? 'bg-red-600' : ''} ${
            type.type.name == 'dragon' ? 'bg-pink-600' : ''
          } ${type.type.name == 'steel' ? 'bg-zinc-500' : ''} ${
            type.type.name == 'ground' ? 'bg-yellow-800' : ''
          } ${type.type.name == 'fairy' ? 'bg-red-400' : ''} ${
            type.type.name == 'ice' ? 'bg-cyan-400' : ''
          } ${type.type.name == 'ghost' ? 'bg-violet-400' : ''}`}
        >
          {type.type.name}
        </li>
      </SlTooltip>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div key={index} className="bg-slate-700 my-2 rounded p-1">
        <motion.div
          className="bg-slate-900 rounded px-2 whitespace-nowrap "
          initial={{ width: 0 }}
          animate={{ width: `${stat.base_stat * 5}px` }}
        >
          {stat.stat.name}: {stat.base_stat}
        </motion.div>
      </div>
    ));

  const renderMoves = () => {
    return <div>dark-pulse</div>;
  };

  return (
    <Layout title={pokeName}>
      <div className="flex flex-col justify-center items-center">
        <span className="absolute text-[400px] font-bold text-slate-500 select-none">
          #{pokeIndex}
        </span>
        <Image
          alt={pokemon.name}
          width={400}
          height={400}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
        />
      </div>

      <div className="bg-slate-900 rounded p-5">
        <ul className="flex gap-5">{renderTypes()}</ul>

        <div>{renderStats()}</div>
        {session ? (
          <ul className="flex gap-5">{renderMoves()}</ul>
        ) : (
          <p>
            <button
              className="col-start-3 bg-cyan-600 w-24 h-12 m-2 hover:bg-cyan-700"
              onClick={() => signIn()}
            >
              Log in
            </button>{' '}
            to see moves
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.id}`
  );
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
