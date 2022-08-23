import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import { getPokemon } from "../../services/Api";
import "./pokemons.css";

const Pokemon = (props) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState("");

  const fetchPokemon = async () => {
    try {
      const result = await getPokemon(id);
      setPokemon(result);
    } catch (error) {
      console.log("fetchPokemon erro:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.clear();
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="pokemon">
        <main className="pokemon">
          <Link to="/" className="retornar-btn">
            Retonar á Pokedex
          </Link>

          {pokemon ? (
            <div className="pokemon-card">
              <span className="pokemon-id">#{pokemon.id} </span>

              <div className="container">
                <div className="pokemon-img">
                  <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                  />
                </div>

                <div className="pokemon-info">
                  <h1 className="name"> {pokemon.name}</h1>
                  <p className="pokemon-type">
                    Tipo:{" "}
                    <span className={pokemon.types[0].type.name}>
                      {pokemon.types[0].type.name}
                    </span>
                    {pokemon.types[1] ? (
                      <span className={pokemon.types[1].type.name}>
                        {pokemon.types[1].type.name}{" "}
                      </span>
                    ) : null}
                    {pokemon.types[2] ? (
                      <span className={pokemon.types[2].type.name}>
                        {pokemon.types[2].type.name}{" "}
                      </span>
                    ) : null}
                    {pokemon.types[3] ? (
                      <span className={pokemon.types[3].type.name}>
                        {pokemon.types[3].type.name}{" "}
                      </span>
                    ) : null}
                  </p>

                  <p> Peso do pokemon: {pokemon.weight}</p>
                  <p> Altura do pokemon: {pokemon.height}</p>
                  <p> HP: {pokemon.stats[0].base_stat}</p>
                  <p> Atack: {pokemon.stats[1].base_stat}</p>
                  <p> Defense: {pokemon.stats[2].base_stat}</p>
                  <p> Special-atk: {pokemon.stats[3].base_stat}</p>
                  <p> Special-def: {pokemon.stats[4].base_stat}</p>
                  <p> Speed: {pokemon.stats[5].base_stat}</p>
                </div>
              </div>
              <div className="container">
                <div className="pokemon-moves">
                  <h3>Movimentos do Pokemon</h3>
                  <button>{pokemon.moves[0].move.name}</button>
                  <button>{pokemon.moves[1].move.name}</button>
                  <button>{pokemon.moves[2].move.name}</button>
                  <button>{pokemon.moves[3].move.name}</button>
                </div>

                <div className="more-info">
                  <h3>Habilidades</h3>
                  {pokemon.abilities[0] ? (
                    <>
                      <span className={pokemon.types[0].type.name}>
                        {pokemon.abilities[0].ability.name}
                      </span>
                    </>
                  ) : null}
                  {pokemon.abilities[1] ? (
                    <>
                      <span className={pokemon.types[0].type.name}>
                        {pokemon.abilities[1].ability.name}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pokemon;
