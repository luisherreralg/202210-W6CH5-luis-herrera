import { render, screen } from '@testing-library/react';
import GnomesPage from './gnomes.page';

describe('Given the GnomesPage component', () => {
    describe('When it is rendered', () => {
        test('Then it should display a title', () => {
            render(<GnomesPage />);
            const title = screen.getByText(/Gnomes Page/i);
            expect(title).toBeInTheDocument();
        });
    });
});
