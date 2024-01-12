import {getStarships} from '../services/services';
import Pagination from './Pagination';

import {useState, useEffect, useMemo} from 'react';

const PAGE_SIZE = 5;

const Starships = () => {
    const [starshipsList, setStarshipsList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalStarships, setTotalStarships] = useState(0);

    const visibleStarships = useMemo(() => {
        return starshipsList.slice(PAGE_SIZE*(page-1), PAGE_SIZE*page)
    }, [starshipsList, page])

    useEffect(() => {
        getStarships()
        .then(response => {
            console.log(response);
            if (response.results) {
                setTotalStarships(response.results.length);
                setTotalPages(Math.floor(response.results.length/PAGE_SIZE));
                setStarshipsList(response.results);
            }
        });

    }, []);

    return (
        <>
            {visibleStarships.map((ship) => (
                <div key={ship.uid}>
                    <p>{ship.properties.name}</p>
                </div>
            ))}
            <Pagination 
                page={page}
                pageSize={PAGE_SIZE}
                totalPages={totalPages}
                totalRecords={totalStarships}
                handlePageChange={setPage}
                assetType="starships"
            />
        </>
    );
  };
  
  export default Starships;