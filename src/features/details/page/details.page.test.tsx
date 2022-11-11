import { render, screen } from '@testing-library/react';
import DetailsPage from './details.page';

describe('Given DetailsPage component', () => {
    describe('When it is rendered', () => {
        test('Then it should display a title', () => {
            render(<DetailsPage />);
            const title = screen.getByText(/Details Page/i);
            expect(title).toBeInTheDocument();
        });
    });
});
