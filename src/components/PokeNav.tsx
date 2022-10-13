import React, {SetStateAction} from 'react';
import ListFavoritePokemon from "./ListFavoritePokemon";
import ListPokemon from "./ListPokemon";

interface IPokeNav{
    setTypeListPokemon: React.Dispatch<SetStateAction<JSX.Element>>
}

const PokeNav: React.FC<IPokeNav> = ({setTypeListPokemon}) => {

    const setTypePokemon = () => {
        setTypeListPokemon(<ListPokemon first={1} quantity={10}/>)
    }
    const setTypeFavorite = () => {
        setTypeListPokemon(<ListFavoritePokemon endPoint={"favorite/"}/>)
    }

    return (
        <>
            <ul className={"Nav"}>
                <li onClick={setTypePokemon}>View Pokemons</li>
                <li className={"viewFavorites"} onClick={setTypeFavorite}>View Favorites</li>
            </ul>
        </>
    );
};

export default PokeNav;
