import type {FC} from 'react';

interface Props{
    searches: string[];
}


export const PreviousSearches: FC<Props> = ({searches}) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas anteriores</h2>
            <ul className="previous-searches-list">
                {searches.map((search, index) => (
                    <li key={index}>{search}</li>
                ))}
            </ul>
        </div>
    );
};