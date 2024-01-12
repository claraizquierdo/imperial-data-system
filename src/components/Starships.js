import { getStarships } from '../services/services';
import Pagination from './Pagination';
import Card from './Card';
import Loading from './Loading';
import '../css/Starships.scss';

import { useState, useEffect, useMemo } from 'react';

const PAGE_SIZE = 5;
const ORDER_OPTIONS = [
    { value: "none", label: "None" },
    { value: "cargo", label: "Cargo capacity" },
    { value: "crew", label: "Crew" }
];

const DEFAULT_ORDER = ORDER_OPTIONS[0];

const Starships = () => {
    const [starshipsList, setStarshipsList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalStarships, setTotalStarships] = useState(0);
    const [order, setOrder] = useState(DEFAULT_ORDER.value);
    const [loading, setLoading] = useState(false);

    const visibleStarships = useMemo(() => {
        let orderedStarships = [...starshipsList];

        const compareCargo = (a, b) => {
            if (parseInt(a.properties.cargo_capacity) < parseInt(b.properties.cargo_capacity)) {
                return 1;
            }
            if (parseInt(a.properties.cargo_capacity) > parseInt(b.properties.cargo_capacity)) {
                return -1;
            }
            return 0;
        }

        const compareCrew = (a, b) => {
            let crewA = a.properties.crew.split('-').pop();
            let crewB = b.properties.crew.split('-').pop();

            if (parseInt(crewA) < parseInt(crewB)) {
                return 1;
            }
            if (parseInt(crewA) > parseInt(crewB)) {
                return -1;
            }
            return 0;
        }

        if (order === "cargo") {
            orderedStarships = orderedStarships.sort(compareCargo);
        } else if (order === "crew") {
            orderedStarships = orderedStarships.sort(compareCrew);
        }
        return orderedStarships.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page)
    }, [starshipsList, page, order])

    useEffect(() => {
        setLoading(true);
        getStarships()
            .then(response => {
                if (response.results) {
                    setTotalStarships(response.results.length);
                    setTotalPages(Math.floor(response.results.length / PAGE_SIZE));
                    setStarshipsList(response.results);
                    setLoading(false);
                }
            });

    }, []);

    const onOrderChange = (event) => {
        setOrder(event.target.value);
    }

    return (
        <div className="starships">
            <h2 className="h2 starships__title">Starships</h2>
            <div className="starships__filters">
                <label htmlFor="order">Order by: </label>
                <select id="order" value={order.value} onChange={onOrderChange}>
                    {ORDER_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {loading ? <Loading /> : (
                <>
                    <div className="starships__list">
                        {visibleStarships.map((ship) => (
                            <Card
                                key={ship.uid}
                                title={ship.properties.name}
                                subtitle={`Cargo: ${ship.properties.cargo_capacity}`}
                                description={`Crew: ${ship.properties.crew}`}
                                imageUrl={`assets/starships/${ship.properties.name.toLowerCase()}.png`}
                                defaultImageUrl="assets/starships/default.png"
                            />
                        ))}
                    </div>
                    <Pagination
                        page={page}
                        pageSize={PAGE_SIZE}
                        totalPages={totalPages}
                        totalRecords={totalStarships}
                        handlePageChange={setPage}
                        assetType="starships"
                    />
                </>
            )}

        </div>
    );
};

export default Starships;