import {Welcome8} from "../components/ListPokemon.type";

const getPokemons = async (endpoint: string) => {

    try {
        const pokemonsData: Promise<Welcome8> = (
            await fetch(`https://pokeapi.azure-api.net/api/pokemons/${endpoint}`, {
                method: 'GET',
            })
        ).json();

        const {data} = (await pokemonsData);

        return data;
    } catch (e: any) {
        console.log(e.message)
    }
    return [];

};

const addFavoritePokemons = async (endpoint: string) => {
    let response:string = "";
    try {
        response = (await (await fetch(`https://pokeapi.azure-api.net/api/pokemons/${endpoint}`, {
            method: 'POST',
        })).json()).message;
    } catch (e: any) {
        console.log(e.message)
    }
    return response;

};

const deleteFavoritePokemons = async (endpoint: string) => {
    let response:string = "";
    try {
        response = (await (await fetch(`https://pokeapi.azure-api.net/api/pokemons/${endpoint}`, {
            method: 'POST',
        })).json()).title;
    } catch (e: any) {
        console.log(e.message)
    }
    return response;

};




export {
    getPokemons,
    addFavoritePokemons,
    deleteFavoritePokemons
};
