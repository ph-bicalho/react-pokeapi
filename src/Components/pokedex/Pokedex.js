import React from "react";
import { Card } from "../cards/Card";
import { Link } from "react-router-dom";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div className="pokedex">
      <ul>
        {loading ? (
          <div> Carregando... </div>
        ) : (
          <ul className="pokedexGrid">
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return (
                  <li key={index}>
                    <Link to={"/pokemon/" + pokemon.id} id={pokemon.id}>
                      <Card pokemon={pokemon} />
                    </Link>
                  </li>
                );
              })}
          </ul>
        )}
      </ul>
    </div>
  );
};

export { Pokedex };
