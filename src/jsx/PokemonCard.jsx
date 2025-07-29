import React, {useState, useEffect} from "react";
import "../css/PokemonCard.css"

const PokemonCard = ({pokemon}) => {

  const getPokemonSpriteUrl = (pokemon) => {
	return `https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/${pokemon.url.split("/").filter(Boolean).pop()}.png`;
  }

  return (
    <div className="pokemon-card">
      <img src={getPokemonSpriteUrl(pokemon)} alt={pokemon.name} ></img>
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;