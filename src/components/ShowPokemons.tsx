import React from 'react';
import {Datum} from "./ListPokemon.type";
import FavButton from "./FavButton";

interface IShowPokemons{
    pokemon: Datum,
    listFavorites: boolean
}

const ShowPokemons: React.FC<IShowPokemons> = ({pokemon, listFavorites}) => {
    console.log(pokemon);
    //debugger;
    return (
        <div className={"Publications"}>
            <div className={"Info"}>
                <div>
                    <img src={pokemon.img} alt=""/>
                    <h3>{pokemon.name}</h3>
                </div>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Moves: &#123;</p>
                <ul>
                    {pokemon.moves.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
                &#125;

                <p>Abilities: &#123;</p>
                <ul>
                    {pokemon.abilities.map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
                &#125;

            </div>

            <FavButton data={pokemon} listFavorites={listFavorites}/>

        </div>
    );
};

export default ShowPokemons;
