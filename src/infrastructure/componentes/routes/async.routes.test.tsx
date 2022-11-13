import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../features/home/page/home.page', () => {
    return () => <div>Test Home</div>;
});
jest.mock('../../../features/gnomes.page/page/gnomes.page', () => {
    return () => <div>Test Gnomes</div>;
});
jest.mock('../../../features/cones.page/page/cones.page', () => {
    return () => <div>Test Cones</div>;
});
jest.mock('../../../features/notfound/page/notfound.page', () => {
    return () => <div>Test NotFound</div>;
});
jest.mock('../../../features/details/page/details.page', () => {
    return () => <div>Test Details</div>;
});

describe('Given AppRoutes component', () => {
    let paths: Array<string>;
    beforeEach(() => {
        paths = ['/home', '/details/0', '/gnomes', '/cones', '/randomTest'];
    });
    describe(`When we render the component 
                And the route is home`, () => {
        beforeEach(async () => {
            // await sonar wants this await out idk why
            act(() => {
                render(
                    <Router initialEntries={paths} initialIndex={0}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the HomePage', async () => {
            const title = /Test Home/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });

    describe(`When we render the component 
            And the route is details`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={1}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the DetailsPage', async () => {
            const title = /Test Details/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });

    describe(`When we render the component 
            And the route is gnomes`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={2}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the GnomesPage', async () => {
            const title = /Test Gnomes/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });

    describe(`When we render the component 
            And the route is cones`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={3}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the ConesPage', async () => {
            const title = /Test Cones/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });

    describe(`When we render the component 
            And the route is a random one`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={paths} initialIndex={4}>
                        <AppRoutes />
                    </Router>
                );
            });
        });
        test('Then it should display the NotFoundPage', async () => {
            const title = /Test NotFound/i;
            const element = await screen.findByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
