export function MoviesGallery({ movies, onDelete,onClose }) {
  return (
    <ul>
      {movies.map(({ id, title,backdrop_path }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={()=> onClose({src:backdrop_path, alt:title})}>Show poster</button>
          </li>
        );
      })}
    </ul>
  );
}
