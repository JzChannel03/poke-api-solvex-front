import React from 'react';
import ShowPokemons from "./ShowPokemons";
import {PokemonsFetch} from "../hooks/pokemonsFetch";

interface paginationProps {
    first: number,
    quantity: number
}

const ListPokemon: React.FC<paginationProps> = ({first, quantity}) => {

    const btnPrev = (document.querySelector('#previousButton') as HTMLButtonElement);
    const btnNext = (document.querySelector('#nextButton') as HTMLButtonElement);

    if(btnPrev !== null){
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }

    let {data: listPokemon, loading} = PokemonsFetch(`listpokemon?first=${first}&last=${first + quantity - 1}`);

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
