import { render, screen, waitFor } from '@testing-library/react';
import Planets from '../components/Planets';
import { getPlanets } from '../services/services';

const mockPlanetsData = {
    total_records: 10,
    total_pages: 2,
    results: [
        {
            uid: '1',
            properties: {
                name: 'Planet 1',
                terrain: 'Mountainous',
                population: '1000',
            },
        },
    ],
};

jest.mock('../services/services');

describe('Planets', () => {
    beforeEach(() => {
        getPlanets.mockReset();
    });

    test('renders planets component with fetched data', async () => {
        getPlanets.mockResolvedValue(mockPlanetsData);

        render(<Planets />);
        const loadingElement = screen.getByText(/Loading/i);
        expect(loadingElement).toBeInTheDocument();

        await waitFor(() => {
            const planetTitleElement = screen.getByText(/Planet 1/i);
            expect(planetTitleElement).toBeInTheDocument();
        });
    });
});
