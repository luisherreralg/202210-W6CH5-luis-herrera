import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import ConesPage from './cones.page';

describe('Given the ConesPage component', () => {
    describe('When it is rendered', () => {
        test('Should display a heading', () => {
            render(
                <Provider store={appStore}>
                    <ConesPage />
                </Provider>
            );
            const heading = screen.getByRole('heading');
            expect(heading).toBeInTheDocument();
        });
    });
});
