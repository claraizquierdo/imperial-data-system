import {getStarships} from '../services/services';
import Pagination from './Pagination';

import {useState, useEffect} from 'react';

const PAGE_SIZE = 12;

const Starships = () => {
    const [starshipsList, setStarshipsList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalStarships, setTotalStarships] = useState(0);

    useEffect(() => {
        getStarships(page, PAGE_SIZE)
        .then(response => {
            if (response.results) {
                setTotalStarships(response.total_records);
                setTotalPages(response.total_pages);
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