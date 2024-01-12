import {getPlanets} from '../services/services';
import Pagination from './Pagination';
import Card from './Card';

import {useState, useEffect} from 'react';

const PAGE_SIZE = 12;

const Planets = () => {
    const [planetList, setPlanetList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalPlanets, setTotalPlanets] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getPlanets(page, PAGE_SIZE)
        .then(response => {
            if (response.results) {
                setTotalPlanets(response.total_records);
                setTotalPages(response.total_pages);
                setPlanetList(response.results);
                setLoading(false);
            }
        });

    }, [page]);
    return (
        <>
            {loading ? <span>Loading...</span>: (
                planetList.map((planet) => (
                    <Card
                        key={planet.uid}
                        title={planet.properties.name}
                        description="The description"
                        imageUrl={`assets/planets/${planet.properties.name.toLowerCase()}.png`}
                    />
                ))
            )}
            <Pagination 
                page={page}
                pageSize={PAGE_SIZE}
                totalPages={totalPages}
                totalRecords={totalPlanets}
                handlePageChange={setPage}
                assetType="planets"
            />
        </>
    );
  };
  
  export default Planets;