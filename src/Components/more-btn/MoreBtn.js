import React from 'react'
import './more-btn.css'
// import { getPokemons } from '../../services/Api';
// import { Pokedex } from '../pokedex/Pokedex';


function MoreBtn(props) {



  const loadMorePokemons = () =>{

    const {limit, setLimit} = props;
        setLimit(limit + 10)
        console.log(limit)
      

    
         
  }

  return (
    <>
     <button type ='btn' id='more' onClick={loadMorePokemons}> Carregar mais Pokemons </button> 
    </>
  )
}

export { MoreBtn }
