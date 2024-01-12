import {getStarships} from '../services/services';

import {useState, useEffect} from 'react';

const PAGE_SIZE = 12;

const Starships = () => {
    const [starshipsList, setStarshipsList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getStarships(page, PAGE_SIZE)
        .then(response => {
            if (response.results) {
                setStarshipsList(response.results);
            }
        });

    }, [page]);
    return (
        <>
            {starshipsList.map((ship) => (
                <div key={ship.uid}>
                    <p>{ship.name}</p>
                </div>
            ))}
        </>
    );
  };
  
  export default Starships;