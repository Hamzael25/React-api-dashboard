import React, {useState, useEffect} from "react";
import "../css/Search.css"
import PokemonCard from "./PokemonCard"

const Search = () => {
  const [pokemons, setPokemons ] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
      const data = await response.json();
      setPokemons(data);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    if (input === "")
      setFilteredPokemons([]);
    else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [input, pokemons]);

  return (
    <>
      <h1>Search a Pokemon</h1>
      <input onChange={(e) => setInput(e.target.value)}/>
      <ul>
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </ul>
    </>
  )
}

export default Search;