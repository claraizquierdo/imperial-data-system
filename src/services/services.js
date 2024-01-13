const BASE_URL = "https://www.swapi.tech/api";

export const getPlanets = async (page, pageSize) => {
    try {
        console.log("In the original getPlanets")
        const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=${pageSize}`);
        const data = await response.json();

        const fetchArray = data.results.map(planet => fetch(planet.url));
        const responses = await Promise.all(fetchArray);

        const planetsFullInfo = await Promise.all(responses.map(response => response.json()));

        return {
            total_records: data.total_records,
            total_pages: data.total_pages,
            results: planetsFullInfo.map(planet => planet.result),
        };
    } catch (error) {
        console.warn(error);
        throw error;
    }
}

export const getStarships = async () => {
    try {
        const response = await fetch(`${BASE_URL}/starships?page=1&limit=36`);
        const data = await response.json();

        const fetchArray = data.results.map(ship => fetch(ship.url));
        const responses = await Promise.all(fetchArray);

        const shipFullInfo = await Promise.all(responses.map(response => response.json()));

        return {
            total_records: data.total_records,
            results: shipFullInfo.map(ship => ship.result),
        };
    } catch (error) {
        console.warn(error);
        throw error;
    }
};
