import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import Navbar from '../Components/navbar/Navbar'
import { getPokemon } from '../services/Api'

const Pokemon = (props) => {
    const {id} =  useParams()
    const [pokemon, setPokemon] = useState('');
    

    const fetchPokemon = async () => {
        try {
          
          const result = await getPokemon(id)
            setPokemon(result)
            
            
        } catch (error) {
            console.log("fetchPokemon erro:", error);
          }

        }

        
        useEffect(() => {
            fetchPokemon();
            
            
          }, []);

          console.log(pokemon)
    return (
    <>
    <header>
        <Navbar/>
        <Link to='/'>Retonar á Pokedex</Link>
    </header>
    
    <main>
        {pokemon ? (
                <div className="card result">
                <span className='pokemonId'>#{pokemon.id} </span>     

                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3> {pokemon.name}</h3>
        </div>) : null}

    </main>
      
    </>
  )
}


export default Pokemon
