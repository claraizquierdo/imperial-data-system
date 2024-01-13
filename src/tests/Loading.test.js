import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';


describe('Loading', () => {
    test('renders loading component with correct content', () => {
        render(<Loading />);
        const loadingElement = screen.getByText(/Loading.../i);
        expect(loadingElement).toBeInTheDocument();
    });
});
