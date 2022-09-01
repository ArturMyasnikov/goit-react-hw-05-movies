import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TrendingFilmsSection = lazy(() =>
  import('./TrandingFilmsSection/TrendingFilmsSection')
);
const MoviesSection = lazy(() => import('./Movies/MoviesSection'));
const AboutFilmCard = lazy(() => import('./views/AboutFilmCard'));
const Layout = lazy(() => import('./views/Layout'));

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Загрузка</h1>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<TrendingFilmsSection />} />
              <Route path="/movies/" element={<MoviesSection />} />
              <Route path="/movies/:filmById/*" element={<AboutFilmCard />} />
              <Route
                path="*"
                element={<div className="wrongUrl">WRONG URL!</div>}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
