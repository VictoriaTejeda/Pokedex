const initialState = {
    counter: 1,
    name: '',
    pokemonImageUrl: '',
    type: '',
    ability:'',
    weight:'',
    experience:''
  }
  
  function pokemonReducer(state = initialState, action) {
    const { type, payload } = action
  
    switch(type) {
      case 'INCREMENT': {
        const stateResult = {
          ...state,
              counter: state.counter +1
        }
        return stateResult
      }
      case 'DECREMENT': {
        const stateResult = {
          ...state,
          counter: state.counter - 1
        }
        return stateResult
      }
      case 'INITIAL': {
        const stateResult = {
          ...state,
          counter: state.counter
        }
        return stateResult
      }
      case 'RANDOM': {
        const stateResult = {
          counter:Math.floor(Math.random() *(151 - 2))
        }
        return stateResult
      }
      case 'SET_NAME': {
        const stateResult = {
          ...state,
          name: payload
        }
        return stateResult
      }
      case 'SET_POKEMON_IMAGE_URL': {
        return {
          ...state,
          pokemonImageUrl: payload
        }
      }
      case 'SET_POKEMON_TYPE': {
        return {
          ...state,
          type: payload
        }
      }
      case 'SET_POKEMON_ABILITY': {
        return {
          ...state,
          ability: payload
        }
      }
      case 'SET_POKEMON_WEIGHT': {
        return {
          ...state,
          weight: payload
        }
      }
      case 'SET_POKEMON_EXPERIENCE': {
        return {
          ...state,
          experience: payload
        }
      }
      default:
        return state
    }
  }
  
 
export default pokemonReducer;