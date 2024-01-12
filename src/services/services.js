const BASE_URL = "https://www.swapi.tech/api";

export const getPlanets = (page, pageSize) => {
    return fetch(`${BASE_URL}/planets?page=${page}&limit=${pageSize}`)
        .then(response => response.json())
        .then(data => {return data})
        .catch(error => console.warn(error));;  
}

export const getStarships = (page, pageSize) => {
    return fetch(`${BASE_URL}/starships?page=${page}&limit=${pageSize}`)
        .then(response => response.json())
        .then(data => {return data})
        .catch(error => console.warn(error));;  
}