import { Component } from 'react';

export default class Modal extends Component {
  handleCloseEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc);
  }

  render() {
    const { onClose, currentPoster } = this.props;
    return (
      <div>
        <div>
          <button type="button" onClick={onClose}>
            Close
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${currentPoster.src}`}
            alt={currentPoster.alt}
          />
        </div>
      </div>
    );
  }
}
