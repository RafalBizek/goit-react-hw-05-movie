import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import Button from 'components/button/Button';
import Cast from 'components/cast/Cast';
import Navigation from 'components/navigation/Navigation';
import Reviews from 'components/reviews/Reviews';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import MovieDetails from 'pages/moviedetails/MovieDetails';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          {/* Nowa trasa dla komponentu Cast */}
          <Route path="/movies/:movieId/cast" exact component={Cast} />
          <Route path="/movies/:movieId/reviews" exact component={Reviews} />
          {/* Jeśli użytkownik poszedł nieistniejącą trasą, przekieruj go na stronę główną */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};
