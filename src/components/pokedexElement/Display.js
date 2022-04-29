import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon } from "../../store/actions/index";

export const Display = () => {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter);
  const pokemonImageUrl = useSelector(store => store.pokemonImageUrl);
  const pokeName= useSelector(store => store.name);


  useEffect(() => {
    dispatch(fetchPokemon(counter))
  }, [counter, dispatch])

  return (
    <div className='display'>
        <div className='display-screen'>
        <h2>#{counter} {pokeName}</h2>
        <img src={pokemonImageUrl}  alt={pokeName} className="pokemon" />
        </div>
    </div>
  )
}
