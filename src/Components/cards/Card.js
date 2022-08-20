import React from 'react'
import './card.css'

const Card = (props) => {
  const {pokemon} = props
  return (
    <div className='card'>
      
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />

      <h3>{pokemon.name}</h3>

    </div>
  )
}
export { Card }
