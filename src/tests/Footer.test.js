import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';


describe('Footer', () => {
    test('renders footer with correct content', () => {
        render(<Footer />);
        const footerElement = screen.getByText(/App created by/i);
        expect(footerElement).toBeInTheDocument();
    });

    test('renders link to GitHub', () => {
        render(<Footer />);
        const githubLink = screen.getByText(/Clara Izquierdo/i);
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/claraizquierdo');
    });

    test('renders link with correct styling', () => {
        render(<Footer />);
        const githubLink = screen.getByText(/Clara Izquierdo/i);
        expect(githubLink).toHaveClass('link', 'link--dark');
    });
});
