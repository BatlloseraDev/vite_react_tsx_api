import axios from "axios";
import type { PokemonResponse, PokemonSpeciesResponse } from "../interfaces/pokeapi.response";
import type { Info } from "../interfaces/info.interface";

export const getInfoByQuery = async (query: string): Promise<Info> => {

    try {
        const [dataPokemon, dataSpecies] = await Promise.all([
            await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${query}`),
            await axios.get<PokemonSpeciesResponse>(`https://pokeapi.co/api/v2/pokemon-species/${query}`)
        ]);// como una no depende de la otra las lanzo al mismo tiempo
        const myInfo: Info = {
            id: dataPokemon.data.id,
            name: dataPokemon.data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${dataPokemon.data.id}/`,
            // img: dataPokemon.data.sprites.other?.dream_world?.front_default || dataPokemon.data.sprites.front_default,
            img: dataPokemon.data.sprites.other?.["official-artwork"].front_default || dataPokemon.data.sprites.front_default,

            descriptions: dataSpecies.data.flavor_text_entries
                .filter(entry => entry.language.name === "es")
                .map(entry => ({
                    language: entry.language.name,
                    edition: entry.version.name,
                    info: entry.flavor_text
                }))
        };
        return myInfo;
        
    } catch (error) {
        console.log(error);
        throw new Error(`No se ecnontró el Pokemon: ${query}`)
    }

};