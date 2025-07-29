import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard"


const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
      const data = await response.json();
      setPokemons(data);
    };
    fetchPokemon();
  }, []);

return (
  <div>
    <h1>
      Pokedex
    </h1>
    <ul>
      {pokemons.map((pokemon, index) => (
        <div key={index}>{<PokemonCard pokemon={pokemon} />}</div>
      ))}
    </ul>
  </div>
);}

export default Pokedex;