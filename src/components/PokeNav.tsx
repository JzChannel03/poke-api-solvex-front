import React, {SetStateAction} from 'react';
import ListFavoritePokemon from "./ListFavoritePokemon";

interface IPokeNav{
    setTypeListPokemon: React.Dispatch<SetStateAction<JSX.Element>>
}

const PokeNav: React.FC<IPokeNav> = ({setTypeListPokemon}) => {

    const setTypeList = () => {
        setTypeListPokemon(<ListFavoritePokemon endPoint={"favorite/"}/>)
    }

    return (
        <>
            <ul className={"Nav"}>
                <li>By ID</li>
                <li>By Name</li>
                <li>By Height</li>
                <li className={"leftLine"}>By Weight</li>
                <li className={"viewFavorites"} onClick={setTypeList}>View Favorites</li>
            </ul>
        </>
    );
};

export default PokeNav;
