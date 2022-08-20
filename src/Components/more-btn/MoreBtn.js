import React from 'react'
import './more-btn.css'
import { getPokemons } from '../../services/Api';
import { Pokedex } from '../pokedex/Pokedex';


function MoreBtn() {
    
  const loadMorePokemons = () =>{
    console.log(getPokemons())
  }

  return (
    <>
     <button id='more' onClick={loadMorePokemons}> Carregar mais Pokemons </button> 
    </>
  )
}

export { MoreBtn }
