import {type Info} from '../../mock-data/pokemons.mock.ts';

interface Props{
    infos: Info[];
}

export const InfoList = ({infos}: Props) => {
    return (
        <div className="descriptions-container">
            {infos.map((pokemon)=>(
                <div key={pokemon.id} className="description-card">
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.img} alt={pokemon.name}/>
                    {pokemon.descriptions.map((desc, index)=>(
                        <p key={index}><strong>[{desc.edition} - {desc.language}]:</strong> {desc.info}</p>
                    ))}
                </div>       
            ))}
        </div> 
    );
}