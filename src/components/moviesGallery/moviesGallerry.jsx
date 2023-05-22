export function MoviesGallery({ movies, onDelete }) {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
