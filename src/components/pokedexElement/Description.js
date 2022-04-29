import React from 'react'
import { useSelector } from 'react-redux'

export const Description = () => {
  const pokeType= useSelector(store => store.type);
  const pokeAbility= useSelector(store => store.ability);
  const pokeWeight= useSelector(store => store.weight);
  const pokeExperience= useSelector(store => store.experience);




  return (
    <div className='container-description'>
        <p>Tipo: 
          <span className='type span'> {pokeType}</span></p>
        <p>Habilidad: 
          <span className='ability span'>{pokeAbility}</span></p> 
          <p>Experiencia: 
          <span>{pokeExperience}</span></p>   
        <p>Peso: 
          <span>{pokeWeight}</span></p>
    </div>
  )
}
