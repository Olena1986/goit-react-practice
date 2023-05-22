import { Component } from 'react';
import { movies } from '../data/movies.json';
import { MoviesGallery } from './moviesGallery/moviesGallerry';
export class App extends Component {
  state = {
    movies: movies,
  };
  render() {
    const { movies } = this.state;
    return <MoviesGallery movies={movies} />;
  }
}
