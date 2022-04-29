import axios from 'axios'

export function increment() {
    return { type: 'INCREMENT' }
  }
  
  export function decrement() {
    return { type: 'DECREMENT' }
  }

  export function initialCounter() {
    return { type: 'INITIAL' }
  }

  export function random() {
    return { type: 'RANDOM' }
  }

  export const fetchPokemon = (counter) => async (dispatch) => {
    const response = await axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${counter}`
    })
    const { data } = response;
    console.log(data)
    dispatch({ type: 'SET_NAME', payload: data.name })
    dispatch({ type: 'SET_POKEMON_IMAGE_URL', payload: data.sprites.front_default })
    dispatch({ type: 'SET_POKEMON_TYPE', payload: data.types[0].type.name})
    dispatch({ type: 'SET_POKEMON_ABILITY', payload: data.abilities[0].ability.name})
    dispatch({ type: 'SET_POKEMON_WEIGHT', payload: data.weight})
    dispatch({ type: 'SET_POKEMON_EXPERIENCE', payload: data.base_experience})
  }