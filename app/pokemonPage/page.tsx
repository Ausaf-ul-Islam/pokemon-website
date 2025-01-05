"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  base_experience: number;
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(
        async (curPokemon: { url: string }) => {
          const res = await fetch(curPokemon.url);
          return await res.json();
        }
      );

      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-3xl font-bold text-gray-700">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-2xl">
        {error}
      </div>
    );
  }

  return (
    <div
      id="pokemon-s"
      className="p-2 md:p-6 bg-gradient-to-b from-green-100 via-white to-green-50 min-h-screen"
    >
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-3">
          Let's Catch Pokémon!
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Discover and explore Pokémon with detailed stats and abilities.
        </p>
        <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search Your Favorite Pokémon..."
            className="w-full border border-gray-300 rounded-full px-6 py-3 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 pr-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 text-green-700 rounded-full hover:bg-green-100 hover:text-green-800 focus:outline-none transition duration-200"
          >
            <FaSearch className="text-lg" />
          </button>
        </div>

      </header>
      {searchData.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-600 mt-10">
          No Pokémon found! Try a different search.
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {searchData.map((curPokemon) => (
            <li
              key={curPokemon.id}
              className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              <figure className="text-center mb-4">
                <img
                  src={curPokemon.sprites.other.dream_world.front_default}
                  alt={curPokemon.name}
                  className="w-28 h-28 mx-auto mb-4"
                />
              </figure>
              <h2 className="text-center text-xl font-bold text-green-700 capitalize mb-2">
                {curPokemon.name}
              </h2>
              <p className="text-center text-sm text-gray-500 mb-4">
                {curPokemon.types.map((type) => type.type.name).join(", ")}
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Height:</span>{" "}
                  {curPokemon.height}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Weight:</span>{" "}
                  {curPokemon.weight}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Speed:</span>{" "}
                  {curPokemon.stats[5]?.base_stat || 0}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Exp:</span>{" "}
                  {curPokemon.base_experience}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Attack:</span>{" "}
                  {curPokemon.stats[1]?.base_stat || 0}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Ability:</span>{" "}
                  {curPokemon.abilities[0]?.ability.name || "N/A"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pokemon;
