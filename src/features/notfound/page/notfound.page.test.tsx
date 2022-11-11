import { render, screen } from '@testing-library/react';
import NotFoundPage from './notfound.page';

describe('Given the NotFoundPage component', () => {
    describe('When it is rendered', () => {
        it('Should display a heading', () => {
            render(<NotFoundPage />);
            const heading = screen.getByRole('heading');
            expect(heading).toBeInTheDocument();
        });
    });
});
