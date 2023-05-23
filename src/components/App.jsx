import { Component } from 'react';
import { MoviesGallery } from './moviesGallery/moviesGallerry';
import Button from './Button';
import { fetchMovies } from '../services/api.js';
import Loader from './Loader';

export class App extends Component {
  state = {
    movies: [],
    isListShow: false,
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isListShow !== this.state.isListShow) {
      this.setState({ isLoading: true });
      fetchMovies(this.state.page)
        .then(({ data: { results } }) =>
          this.setState(prevState => {
            return { movies: [...prevState.movies, ...results] };
          })
        )
        .catch(error => {
          console.log(error);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  changeVisibility = () => {
    this.setState({ isListShow: true });
  };

  deleteMovie = id => {
    this.setState(prevState => {
      return { movies: prevState.movies.filter(movie => movie.id !== id) };
    });
  };

  render() {
    const { movies, isListShow, isLoading } = this.state;
    return (
      <>
        {isListShow ? (
          <MoviesGallery movies={movies} onDelete={this.deleteMovie} />
        ) : (
          <Button text={'Show movies'} clickHander={this.changeVisibility} />
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}
