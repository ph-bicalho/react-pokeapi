import React, {useState} from "react";
import './navbar.css'
import { searchPokemon } from '../../services/Api';
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState('')
  const onHandleChange = (e) => {
    setSearch(e.target.value)
  }
  const onSubmitHandler= (e) => {
    e.preventDefault()
    onSearchHandler(search)
  }
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
 }

  return (
    <>
      <nav>
        <div>
          <img
            className="logo"
            alt="PokeAPI logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          ></img>
        </div>

        <div>
            <form onSubmit={onSubmitHandler}> 
              <input type='text' name="search" id="search-bar" placeholder="Buscar" onChange={onHandleChange}/> 
            </form>
        </div>
        
        <div>
            <Link to ='/'>Lista de Pokemons</Link>
            
        </div>
        

      </nav>

      {pokemon ? (
              
                <div className="card result">
                  <Link to={'/pokemon/' + pokemon.id} id={pokemon.id}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3> {pokemon.name}</h3>
                </Link>
        </div>) : null}

      
    </>
  );
}

export default Navbar;
