// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { MoviesGallery } from './moviesGallery/moviesGallerry';
import Button from './Button';
import { fetchMovies } from '../services/api.js';
import Loader from './Loader';
import { Modal } from './Modal';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [isListShow, setIsListShow] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPoster, setCurrentPoster] = useState(null);

  const changeVisibility = () => {
    setIsListShow(prevState => !prevState);
  };

  const deleteMovie = id => {
    setMovies(prevState => prevState.filter(movie => movie.id !== id));
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const handleOpenModal = data => {
    setCurrentPoster(data);
  };
  const handleCloseModal = () => {
    setCurrentPoster(null);
  };

  useEffect(() => {
    if (isListShow) {
      setIsLoading(true);
      fetchMovies(page)
        .then(({ data: { results } }) =>
          setMovies(prevState => [...prevState, ...results])
        )
        .catch(error => {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isListShow, page]);

  return (
    <>
      {isListShow ? (
        <>
          <MoviesGallery
            movies={movies}
            onDelete={deleteMovie}
            onClose={handleOpenModal}
          />
          <Button text="Load more" clickHander={handleLoadMore} />
        </>
      ) : (
        <Button text="Show movies" clickHander={changeVisibility} />
      )}
      {isLoading && <Loader />}
      {currentPoster && (
        <Modal currentPoster={currentPoster} onClose={handleCloseModal} />
      )}
    </>
  );
};

// export class App extends Component {
//   state = {
//     movies: [],
//     isListShow: false,
//     page: 1,
//     isLoading: false,
//     currentPoster: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.isListShow !== this.state.isListShow || prevState.page !== this.state.page) {
//       this.setState({ isLoading: true });
//       fetchMovies(this.state.page)
//         .then(({ data: { results } }) =>
//           this.setState(prevState => {
//             return { movies: [...prevState.movies, ...results] };
//           })
//         )
//         .catch(error => {
//           console.log(error);
//         })
//         .finally(() => this.setState({ isLoading: false }));
//     }
//   }

//   changeVisibility = () => {
//     this.setState({ isListShow: true });
//   };

//   deleteMovie = id => {
//     this.setState(prevState => {
//       return { movies: prevState.movies.filter(movie => movie.id !== id) };
//     });
//   };

//   handleLoadMore=() => {
//     this.setState((prevState)=>({page: prevState.page+1}))
//   }
//   handleOpenModal=(data)=>{
//     this.setState({currentPoster: data});

//   }
//   handleCloseModal=()=>{
//     this.setState({currentPoster: null});

//   }

//   render() {
//     const { movies, isListShow, isLoading,currentPoster } = this.state;
//     return (
//       <>
//         {isListShow ? (
//           <>
//           <MoviesGallery movies={movies} onDelete={this.deleteMovie} onClose={this.handleOpenModal} />
//           <Button text='Load more' clickHander={this.handleLoadMore}/>
//           </>
//         ) : (
//           <Button text='Show movies' clickHander={this.changeVisibility} />
//         )}
//         {isLoading && <Loader />}
//         {currentPoster && <Modal currentPoster={currentPoster} onClose={this.handleCloseModal}/>}
//       </>
//     );
//   }
// }
