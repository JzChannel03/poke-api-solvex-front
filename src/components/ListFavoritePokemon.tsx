import React from 'react';
import ShowPokemons from "./ShowPokemons";
import {PokemonsFetch} from "../hooks/pokemonsFetch";


interface IListFavoritePokemon{
    endPoint: string;
}

const ListFavoritePokemon: React.FC<IListFavoritePokemon> = ({endPoint}) => {

    let {data: favoritePokemon, loading} = PokemonsFetch(endPoint);
    console.log(favoritePokemon);
    //debugger;

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            {!loading && favoritePokemon.map((value) =>
                {
                    return (
                        <ShowPokemons key={value.id} pokemon={value} listFavorites={true} />
                    )
                }
            )}
        </div>
    );
};

export default ListFavoritePokemon;