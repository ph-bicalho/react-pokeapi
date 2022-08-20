import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar/Navbar";
// import { Card } from "../Components/cards/Card";
import { MoreBtn } from "../Components/more-btn/MoreBtn";
import { getPokemons, getPokemonsData } from "../services/Api";
import { Pokedex } from "../Components/pokedex/Pokedex";

function Home() {
  const [ loading, setLoading ] = useState(false);
  const [ pokemons, setPokemons ] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promisses = data.results.map( async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      })

      const results = await Promise.all(promisses)
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons erro:", error);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  const loadMorePokemons = async() =>{
    const page = await getPokemons();
    const next = page.next
    console.log(next)
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h2> Selecione um Pokemon </h2>
        <Pokedex pokemons={pokemons} loading={loading}></Pokedex>

        <MoreBtn onClick={loadMorePokemons()}></MoreBtn>
      </main>
    </>
  );
}

export default Home;
