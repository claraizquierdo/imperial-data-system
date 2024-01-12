import { getPlanets } from '../services/services';
import Pagination from './Pagination';
import Card from './Card';
import Loading from './Loading';
import '../css/components/Planets.scss';

import { useState, useEffect } from 'react';

const PAGE_SIZE = 8;

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
        <div className="planets">
            <h2 className="h2 planets__title">Planets</h2>
            {loading ? <Loading /> : (
                <>
                    <div className="planets__list">
                        {planetList.map((planet) => (
                            <Card
                                key={planet.uid}
                                title={planet.properties.name}
                                subtitle={planet.properties.terrain}
                                description={`Population: ${planet.properties.population}`}
                                imageUrl={`assets/planets/${planet.properties.name.toLowerCase()}.png`}
                                defaultImageUrl="assets/planets/default.png"
                            />
                        ))}
                    </div>
                    <Pagination
                        page={page}
                        pageSize={PAGE_SIZE}
                        totalPages={totalPages}
                        totalRecords={totalPlanets}
                        handlePageChange={setPage}
                        assetType="planets"
                    />
                </>
            )}

        </div>
    );
};

export default Planets;