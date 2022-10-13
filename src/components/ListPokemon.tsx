import React from 'react';
import ShowPokemons from "./ShowPokemons";
import {PokemonsFetch} from "../hooks/pokemonsFetch";

interface paginationProps {
    first: number,
    quantity: number,
}

const ListPokemon: React.FC<paginationProps> = ({first, quantity}) => {

    let {data: listPokemon, loading} = PokemonsFetch(`listpokemon?first=${first}&last=${first + quantity - 1}`);
    console.log(listPokemon);
    //debugger;

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            {!loading && listPokemon.map((value) =>
                {
                    return (
                        <ShowPokemons key={value.id} pokemon={value} listFavorites={false} />
                    )
                }
            )}
        </div>
    );
};

export default ListPokemon;
