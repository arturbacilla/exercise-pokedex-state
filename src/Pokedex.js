import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currIndex: 0,
        }
    }

    render() {
        const { pokemons } = this.props;
        const { currIndex } = this.state;
        return (
            <div className="pokedex">                
                <Pokemon key={pokemons[currIndex].id} pokemon={pokemons[currIndex]} /> 
            </div>
        );
    }
}

export default Pokedex;