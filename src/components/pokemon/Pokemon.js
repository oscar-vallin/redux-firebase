import React,{useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

const Pokemon = ({pokes}) => {
  const [pokemon,getPoke] = useState('');  
  const handler = poke => {
    getPoke(poke.target.value)
  }
  const poke = () => {
    const name =   pokes.filter(p => p.name === pokemon)
        axios.get(name[0].url)
            .then(data => {
                console.log(data.data.sprites)
            });
}
    return(
        <div>
            <h3>Choose your favorites Pokemon</h3>
            <input type="text"  onChange={handler}/>
            <button onClick={poke}>Get Pokemon</button>
        </div>
    );
};
const mapState = ({poke: pokes}) => {
    return(
        pokes
    )
}
export default connect(mapState)(Pokemon);

