import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Pokemon = ({ pokemon }) => {
  const pokeIndex = ('000' + pokemon.id).slice(-3);
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  console.log(pokemon);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li
        key={type.slot}
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
