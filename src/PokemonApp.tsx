import { useState } from "react";
import { PreviousSearches } from "./pokemon/components/PreviousSearches";
import { mockInfo } from "./mock-data/pokemons.mock";
import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { InfoList } from "./pokemon/components/descriptionsList";
import { getInfoByQuery } from "./pokemon/actions/get-info-by-query.action";
import { Info } from "./pokemon/interfaces/info.interface";



export const PokemonApp = () => {

    const [infos, setInfos] = useState<Info[]>([]);

    const [previousTerms, setPreviousTerms] = useState(['Pikachu', 'Bulbasaur', 'Charmander']);

    const handleTermClicked = (term: string) => {
        console.log('Term clicked:', term);
    };

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        // console.log('Query:', query);
        setPreviousTerms([query, ...previousTerms].splice(0, 7));

        //como he hecho el try tengo que manejarlo aqui
        try {
            const info = await getInfoByQuery(query);
            //añadir aqui el resultado de info 
            setInfos(pevInfos => [info, ...pevInfos])
        } catch (error) {//la cosa sería hacer un popup...
            console.log(error);
            alert(error);
        }

    };


    return (
        <>
            {/*Header*/}
            <CustomHeader title="Buscador de descripciones de pokémons" description="Descubre todas las descripciones de tus pokémons favoritos" />

            {/* Search*/}
            <SearchBar
                placeholder="Buscar pokémon"
                onQuery={handleSearch}
            />

            {/*Búsquedas prevías */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Descripciones*/}
            <InfoList infos={infos} />
        </>
    );

}