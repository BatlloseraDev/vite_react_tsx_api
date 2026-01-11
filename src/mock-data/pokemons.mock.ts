export interface info{
    id: string;
    name: string;
    url: string;
    descriptions: {
        language: string;
        edition:string;
        info: string;
    }[];
}


export const mockInfo: info[] =[
    {
        id: "1",
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        descriptions: [
            {
                language: "en",
                edition: "red",
                info: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
            },
            {
                language: "es",
                edition: "rojo",
                info: "Una extraña semilla le fue plantada en la espalda al nacer. La planta brota y crece con este Pokémon."
            }
        ]
    },
    {
        id: "2",
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
        descriptions: [
            {
                language: "en",
                edition: "red",
                info: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
            },
            {
                language: "es",
                edition: "rojo",
                info: "Cuando el bulbo de su espalda crece, parece perder la capacidad de pararse sobre sus patas traseras."
            }
        ]
    },
    {
        id: "3",
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        descriptions: [
            {
                language: "en",
                edition: "red",
                info: "The plant blooms when it absorbs solar energy. It stays on the move to seek sunlight."
            },
            {
                language: "es",
                edition: "rojo",
                info: "La planta florece cuando absorbe energía solar. Se mantiene en movimiento para buscar la luz del sol."
            }
        ]
    },
    {
        id: "4",
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        descriptions: [
            {
                language: "en",
                edition: "red",
                info: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
            },
            {
                language: "es",
                edition: "rojo",
                info: "Obviamente prefiere los lugares cálidos. Cuando llueve, se dice que sale vapor de la punta de su cola."
            }
        ]
    },
    {
        id: "5",
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
        descriptions: [
            {
                language: "en",
                edition: "red",
                info: "Tough fights await it. The stronger they are, the more aggressive it becomes. It also blasts fire."
            },
            {
                language: "es",
                edition: "rojo",
                info: "Le esperan duras peleas. Cuanto más fuertes son, más agresivo se vuelve. También lanza fuego."
            }
        ]
    },

            
]