import { useState } from "react";
import { getInfoByQuery } from "../actions/get-info-by-query.action";
import type { Info } from "../interfaces/info.interface";

export const useInfo = () => {
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

            setInfos(pevInfos => [info, ...pevInfos].splice(0, 3))
        } catch (error) {//la cosa sería hacer un popup...
            console.log(error);
            alert(error);
        }

    };

    return{
        //propiedades y valores
        infos,
        previousTerms,
        //metodos y acciones
        handleTermClicked,
        handleSearch
    
    }

}