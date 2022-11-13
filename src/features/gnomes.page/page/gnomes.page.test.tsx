import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import GnomesPage from './gnomes.page';

describe('Given the GnomesPage component', () => {
    describe('When it is rendered', () => {
        test('Then it should display a title', () => {
            render(
                <Provider store={appStore}>
                    <GnomesPage />
                </Provider>
            );
            const title = screen.getByText(/Gnomes Page/i);
            expect(title).toBeInTheDocument();
        });
    });
});
