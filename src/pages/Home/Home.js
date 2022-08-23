import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { MoreBtn } from "../../Components/more-btn/MoreBtn";
import { getPokemons, getPokemonsData } from "../../services/Api";
import { Pokedex } from "../../Components/pokedex/Pokedex";
import { Footer } from "../../Components/footer/Footer";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const offset = 0;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(limit, offset);
      const promisses = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promisses);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons erro:", error);
    }
  };
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>
      <main>
        <h2> Selecione um Pokemon </h2>
        <Pokedex pokemons={pokemons} loading={loading} />

        <MoreBtn limit={limit} setLimit={setLimit} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
