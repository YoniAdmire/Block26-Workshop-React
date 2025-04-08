const MovieList = ({ movies, onSelect }) => (
    <div>
      {movies.map(m => (
        <div key={m.imdbID} onClick={() => onSelect(m.imdbID)}>
          <img src={m.Poster} width="100" />
          <p>{m.Title}</p>
        </div>
      ))}
    </div>
  )
  
  export default MovieList
  