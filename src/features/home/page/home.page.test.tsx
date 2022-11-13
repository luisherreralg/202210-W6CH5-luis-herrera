import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { MemoryRouter as Router } from 'react-router-dom';

import HomePage from './home.page';

describe('Given HomePage component', () => {
    describe('When it is rendered', () => {
        test('Then it should display a title', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
            const title = screen.getByText(/On sale/i);
            expect(title).toBeInTheDocument();
        });
    });
});
