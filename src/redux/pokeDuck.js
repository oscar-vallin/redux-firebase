import axios from 'axios';
//const
const initialState = {
    pokes : [],
    fetching: false,
};

const POKEMON = "POKEMON";
const POKE_FET = "POKE_FET";
const POKE_ERROR = "POKE_ERROR";

//reducer
const pokeReducer = (state = initialState, action) => {
    switch(action.type){
        case POKE_FET:
            return {...state, fetching: true}
        case POKEMON: 
            return {...state, pokes: action.payload, fetching: false}
        case POKE_ERROR:
            return {...state,fetching: false, error: action.payload }    
        default:
            return state
    }
}
export default pokeReducer;
//action

export const getPokemonAction = poke => (dispatch,getState) => {
    dispatch({
        type: POKE_FET,
    })
    return axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(data =>{
            dispatch({
                type: POKEMON,
                payload: data.data.results
            })
        }) 
        .catch(err => {
            dispatch({
                type: POKE_ERROR,
                payload: err.response.message
            })
        })
}
