import React from 'react';
import favoriteFalse from '../favoriteFalse.png';
import favoriteTrue from '../favoriteTrue.png';
import {addFavoritePokemonFetch, deleteFavoritePokemonFetch} from "../hooks/pokemonsFetch";
import {Datum} from "./ListPokemon.type";

interface IFavButton {
    data: Datum,
    listFavorites: boolean
}

const FavButton: React.FC<IFavButton> = ({data, listFavorites}) => {
    //debugger;

    console.log(data);

    const addFavorite = async () => {

        let message = (await addFavoritePokemonFetch(data.id));
        if(message !== "") alert(message);
        else alert("Added to favorites!");

    }

    const deleteFavorite = async () => {

        let message = (await deleteFavoritePokemonFetch(data.id));
        if(message !== "") alert(message);
        else {
            alert("Successfully eliminated!");
        }

    }

    return (
        <>
            {
                listFavorites
                    ?
                    <div className={"Favorite"} onClick={deleteFavorite}>
                        <div>
                            <img src={favoriteTrue} alt=""/>
                            <h4>Delete Favorite</h4>

                        </div>
                    </div>
                    :
                    <div className={"Favorite"} onClick={addFavorite}>
                        <div>
                            <img src={favoriteFalse} alt=""/>
                            <h4>Add to Favorites</h4>
                        </div>
                    </div>
            }
        </>
    );
};

export default FavButton;
