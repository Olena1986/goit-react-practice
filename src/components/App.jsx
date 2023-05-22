import { Component } from 'react';
import movies from '../data/movies.json';
import { MoviesGallery } from './moviesGallery/moviesGallerry';
export class App extends Component {
  state = {
    movies: movies,
  };

  componentDidMount() {
    const data = localStorage.getItem('movies');
    if (data !== null) {
      this.setState({ movies: JSON.parse(data) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movies !== this.state.movies) {
      localStorage.setItem('movies', JSON.stringify(this.state.movies));
    }
  }

  deleteMovie = id => {
    this.setState(prevState => {
      return { movies: prevState.movies.filter(movie => movie.id !== id) };
    });
  };

  render() {
    const { movies } = this.state;
    return <MoviesGallery movies={movies} onDelete={this.deleteMovie} />;
  }
}
