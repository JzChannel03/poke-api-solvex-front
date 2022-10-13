import {useEffect, useState} from 'react';
import {Datum} from "../components/ListPokemon.type";
import {getPokemons, addFavoritePokemons, deleteFavoritePokemons} from "../helpers/GetPokemons";

type FetchPokemonObject = {
    data: Datum[],
    loading: boolean
}

const PokemonsFetch = (endpoint: string) => {

    const [state, setState] = useState<FetchPokemonObject>({
        data: [],
        loading: true
    });
    useEffect(() => {
        getPokemons(endpoint).then((value) =>
            setState({
                data: value,
                loading: false
            })
        )
    }, [endpoint]);

    return state;

};

/*const getFavoritePokemonFetch = (endpoint: string) => {

    return;

};*/

const addFavoritePokemonFetch = async (id: number) => {

    return await addFavoritePokemons(`favorite/${id}`);

};

const deleteFavoritePokemonFetch = async (id: number) => {

    return await deleteFavoritePokemons(`favorite/delete/${id}`);

};

export {
    PokemonsFetch,
    addFavoritePokemonFetch,
    deleteFavoritePokemonFetch
};
