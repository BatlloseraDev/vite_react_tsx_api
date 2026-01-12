// ==========================================
// 1. Interfaces para: https://pokeapi.co/api/v2/pokemon/{id}
// ==========================================

export interface PokemonResponse {
    id: number;
    name: string;
    species: SpeciesReference; 
    sprites: Sprites;
}

export interface SpeciesReference {
    name: string;
    url: string;
}

export interface Sprites {
    front_default: string; // Sprite pixelado por defecto
    other?: {
        "official-artwork": {
            front_default: string;
        };
        dream_world?: {
            front_default: string;
        };
    };
}


// ==========================================
// 2. Interfaces para: https://pokeapi.co/api/v2/pokemon-species/{id}
// ==========================================

export interface PokemonSpeciesResponse {
    id: number;
    name: string;
    flavor_text_entries: FlavorTextEntry[]; 
}

export interface FlavorTextEntry {
    flavor_text: string; // El texto de la descripción
    language: NamedAPIResource;
    version: NamedAPIResource; // Edición del juego (Rojo, Azul, etc.)
}


export interface NamedAPIResource {
    name: string;
    url: string;
}