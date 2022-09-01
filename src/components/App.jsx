import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TrendingFilmsSection = lazy(() =>
  import('./TrandingFilmsSection/TrendingFilmsSection')
);
const MoviesSection = lazy(() => import('./Movies/MoviesSection'));
const AboutFilmCard = lazy(() => import('./views/AboutFilmCard'));
const Layout = lazy(() => import('./views/Layout'));
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <div>
      <BrowserRouter basename="goit-react-hw-05-movies/">
        <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Загрузка</h1>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<TrendingFilmsSection />} />
              <Route path="/movies/" element={<MoviesSection />} />
              <Route path="/movies/:filmById/*" element={<AboutFilmCard />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
