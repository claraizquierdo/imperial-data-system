import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../components/Navigation';


describe('Navigation', () => {
    test('renders navigation component with correct buttons', () => {
        render(<Navigation activePage="planets" setActivePage={() => { }} />);

        const planetsButton = screen.getByText(/Planets/i);
        const starshipsButton = screen.getByText(/Starships/i);

        expect(planetsButton).toBeInTheDocument();
        expect(starshipsButton).toBeInTheDocument();

        expect(planetsButton).toHaveClass('button--as-link', 'active');
        expect(starshipsButton).toHaveClass('button--as-link');
    });

    test('calls setActivePage when a button is clicked', () => {
        const setActivePageMock = jest.fn();
        render(<Navigation activePage="planets" setActivePage={setActivePageMock} />);

        const starshipsButton = screen.getByText(/Starships/i);

        fireEvent.click(starshipsButton);

        expect(setActivePageMock).toHaveBeenCalledWith('starships');
    });
});
