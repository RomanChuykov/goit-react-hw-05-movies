import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';



const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    default: module.Movies, }))
);

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    default: module.Cast, }))
);

const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    default: module.Reviews, }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails, }))
);
const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({
    default: module.Home,}))
);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
};
