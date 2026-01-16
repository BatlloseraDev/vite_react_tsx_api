import { useState } from "react";
import { PreviousSearches } from "./pokemon/components/PreviousSearches";
import { mockInfo } from "./mock-data/pokemons.mock";
import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { InfoList } from "./pokemon/components/descriptionsList";
import { getInfoByQuery } from "./pokemon/actions/get-info-by-query.action";
import { type Info } from "./pokemon/interfaces/info.interface";
import { useInfo } from "./pokemon/hooks/useInfo";



export const PokemonApp = () => {

    const { infos, previousTerms, handleTermClicked, handleSearch } = useInfo();


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