// import { Component } from 'react';
import { useEffect } from 'react';

export const Modal = ({ onClose, currentPoster }) => {
  useEffect(() => {
    const handleCloseEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseEsc);
    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
    };
  }, [onClose]);

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
};

// export default class Modal extends Component {
//   handleCloseEsc = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleCloseEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleCloseEsc);
//   }

//   render() {
//     const { onClose, currentPoster } = this.props;
//     return (
//       <div>
//         <div>
//           <button type="button" onClick={onClose}>
//             Close
//           </button>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${currentPoster.src}`}
//             alt={currentPoster.alt}
//           />
//         </div>
//       </div>
//     );
//   }
// }
