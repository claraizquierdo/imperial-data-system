import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';


describe('Pagination', () => {
    test('renders pagination component with correct content', () => {
        render(
            <Pagination
                page={1}
                pageSize={10}
                totalPages={5}
                totalRecords={50}
                assetType="items"
                handlePageChange={() => { }}
            />
        );

        const previousButton = screen.getByRole('button', {
            name: /Previous/i
        });
        const nextButton = screen.getByRole('button', {
            name: /Next/i
        });
        const totalsText = screen.getByText(/1 to 10 of 50 items/i);

        expect(previousButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        expect(totalsText).toBeInTheDocument();

        expect(previousButton).toBeDisabled();
        expect(nextButton).not.toBeDisabled();
    });

    test('calls handlePageChange with the correct argument on button click', () => {
        const handlePageChangeMock = jest.fn();
        render(
            <Pagination
                page={2}
                pageSize={10}
                totalPages={5}
                totalRecords={50}
                assetType="items"
                handlePageChange={handlePageChangeMock}
            />);

        const nextButton = screen.getByRole('button', {
            name: /Next/i
        });

        fireEvent.click(nextButton);

        expect(handlePageChangeMock).toHaveBeenCalledWith(3);
    });

    test('disables next button on last page', () => {
        render(
            <Pagination
                page={5}
                pageSize={10}
                totalPages={5}
                totalRecords={50}
                assetType="items"
                handlePageChange={() => { }}
            />
        );

        const nextButton = screen.getByRole('button', {
            name: /Next/i
        });

        expect(nextButton).toBeDisabled();
    });
});
