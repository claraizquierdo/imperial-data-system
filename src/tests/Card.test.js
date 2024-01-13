import { render, screen } from '@testing-library/react';
import Card from '../components/Card';


describe('Card', () => {
    test('renders card component with correct content', () => {
        render(
            <Card
                title="Test Title"
                subtitle="Test Subtitle"
                description="Test Description"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/79/Face-smile.svg"
            />);

        const titleElement = screen.getByText(/Test Title/i);
        const subtitleElement = screen.getByText(/Test Subtitle/i);
        const descriptionElement = screen.getByText(/Test Description/i);
        const imageElement = screen.getByAltText(/Test Title/i);

        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    });
});
