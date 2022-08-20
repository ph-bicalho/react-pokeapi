import React from 'react'
import { Card } from '../cards/Card'

const Pokedex = (props) => {
    
    const {pokemons, loading} = props;
    
    
    return (
      <div className='pokedex'>
          <ul>
              {loading ? (<div> Carregando... </div>) : (
              <ul className='pokedexGrid'>
                {pokemons && pokemons.map( (pokemon, index) => {
                    return (
                        <li key={index}>
                            <Card pokemon={pokemon} />
                        </li>
                    )
                })}

              </ul>) }       
          </ul>
      </div>
    )
  }

export {Pokedex}