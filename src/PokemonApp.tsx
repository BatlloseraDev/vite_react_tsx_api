import { PreviousSearches } from "./pokemon/components/PreviousSearches";
import { mockInfo } from "./mock-data/pokemons.mock";
import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { InfoList } from "./pokemon/components/descriptionsList";



export const PokemonApp=()=>{
    return (
        <>
        {/*Header*/}
        {/* <div className= "content-center">
            <h1>Buscador de descripciones de pokemons</h1>
            <p>Descubre todas las descripciones de tus pokemons favoritos</p>
        </div> */}
        <CustomHeader title="Buscador de descripciones de pokémons" description="Descubre todas las descripciones de tus pokémons favoritos"/>

        {/* Search*/}
        {/* <div className="search-container">
            <input type="text" placeholder="Buscar pokemon"/>
            <button>Buscar</button>
        </div> */}
        <SearchBar placeholder="Buscar pokémon"/>

        {/*Búsquedas prevías */}
        <PreviousSearches/>
        {/* <div className="previous-searches">
            <h2>Búsquedas anteriores</h2>
            <ul className="previous-searches-list">
                <li>Pikachu</li>
                <li>Bulbasaur</li>
                <li>Charmander</li>
            </ul>
        </div> */}

        {/* Descripciones*/}
        {/* <div className="descriptions-container">
            {mockInfo.map((pokemon)=>(
                <div key={pokemon.id} className="description-card">
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.img} alt={pokemon.name}/>
                    {pokemon.descriptions.map((desc, index)=>(
                        <p key={index}><strong>[{desc.edition} - {desc.language}]:</strong> {desc.info}</p>
                    ))}
                </div>       
            ))}
        </div> */}
        <InfoList infos={mockInfo}/>
        </>
    );

}