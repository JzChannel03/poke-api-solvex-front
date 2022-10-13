import React, {useState} from 'react';
import './App.css'
import PokeBallImage from './pokeball-logo.png'
import PokeNav from "./components/PokeNav";
import ListPokemon from "./components/ListPokemon";

function App() {
    const [first, setFirst] = useState(1);
    const quantity = 10;

    const [typeList, setTypeListPokemon] = useState(<ListPokemon first={first} quantity={quantity}/>);

    const nextPageHandler = () => {
        const button = document.querySelector('#previousButton') as HTMLButtonElement;
        setFirst((value) => {
            button.disabled = false;
            // eslint-disable-next-line no-restricted-globals
            scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return value + quantity;
        });
        console.log(first);
        setTypeListPokemon(<ListPokemon first={first + quantity} quantity={quantity}/>);
    }

    const previousPageHandler = () => {
        const button = document.querySelector('#previousButton') as HTMLButtonElement;
        setFirst((value) => {
            if(value > 10){
                button.disabled = false;
                // eslint-disable-next-line no-restricted-globals
                scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTypeListPokemon(<ListPokemon first={first - quantity} quantity={quantity}/>);
                return value - quantity;
            }
            button.disabled = true;
            return value;
        })

    }

    return (
        <div className="App grid-layout">
            <div className={'logo box item1'}>
                <img src={PokeBallImage} alt="PokeballImg" className={"Pokelogo"}/>
                <h1>PokeDex</h1>
            </div>
            <div className={"item2"}>
                <PokeNav setTypeListPokemon={setTypeListPokemon}/>
            </div>
            <div className={"item3"}>
                {typeList}
            </div>
            <div className={"item4 Pagination"}>
                <button id={'previousButton'} onClick={previousPageHandler}>Previous...</button>
                <button id={'nextButton'} onClick={nextPageHandler}>Next...</button>
            </div>


        </div>
    );
}

export default App;
