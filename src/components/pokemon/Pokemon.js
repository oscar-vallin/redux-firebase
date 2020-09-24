import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [poke, getPoke] =useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(data => {
                let pok = data.data.sprites.front_default
                getPoke(prevState => prevState.poke = pok)
            })
    },[])
    return(
        <img src={poke} alt="poke"/>
    )
}
export default Pokemon;