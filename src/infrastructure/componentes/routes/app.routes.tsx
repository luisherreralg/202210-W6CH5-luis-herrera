import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../../../features/home/page/home.page'));
const Details = lazy(
    () => import('../../../features/details/page/details.page')
);
const Gnomes = lazy(
    () => import('../../../features/gnomes.page/page/gnomes.page')
);
const Cones = lazy(
    () => import('../../../features/cones.page/page/cones.page')
);
const NotFound = lazy(
    () => import('../../../features/notfound/page/notfound.page')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/gnomes" element={<Gnomes />} />
                <Route path="/cones" element={<Cones />} />
                <Route path="/notFound" element={<NotFound />} />
                <Route path="" element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate replace to="notFound" />}
                ></Route>
            </Routes>
        </Suspense>
    );
}
