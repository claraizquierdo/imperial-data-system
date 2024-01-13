import { render, screen, waitFor } from '@testing-library/react';
import Starships from '../components/Starships';
import { getStarships } from '../services/services';

const mockStarshipsData = {
    results: [
        {
            uid: '1',
            properties: {
                name: 'Starship 1',
                cargo_capacity: '5000',
                crew: '10',
            },
        },
        {
            uid: '2',
            properties: {
                name: 'Starship 2',
                cargo_capacity: '5000',
                crew: '10',
            },
        },
        {
            uid: '3',
            properties: {
                name: 'Starship 3',
                cargo_capacity: '5000',
                crew: '10',
            },
        }
    ],
};

jest.mock('../services/services');

describe('Starships', () => {
    beforeEach(() => {
        getStarships.mockReset();
    });

    test('renders starships component with fetched data', async () => {
        getStarships.mockResolvedValue(mockStarshipsData);

        render(<Starships />);
        const loadingElement = screen.getByText(/Loading/i);
        expect(loadingElement).toBeInTheDocument();

        await waitFor(() => {
            const planetTitleElement = screen.getByText(/Starship 1/i);
            expect(planetTitleElement).toBeInTheDocument();
        });
    });
});
