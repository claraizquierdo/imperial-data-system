import {getPlanets} from '../services/services';

import {useState, useEffect} from 'react';

const PAGE_SIZE = 12;

const Planets = () => {
    const [planetList, setPlanetList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPlanets(page, PAGE_SIZE)
        .then(response => {
            if (response.results) {
                setPlanetList(response.results);
            }
        });

    }, [page]);
    return (
        <>
            {planetList.map((planet) => (
                <div key={planet.uid}>
                    <p>{planet.name}</p>
                </div>
            ))}
        </>
    );
  };
  
  export default Planets;