import { render, screen } from '@testing-library/react';
import Header from '../components/Header';


describe('Header', () => {
    test('renders application title', () => {
        render(<Header />);
        const title = screen.getByText(/Imperial destroyers center/i);
        expect(title).toBeInTheDocument();
    });
});
