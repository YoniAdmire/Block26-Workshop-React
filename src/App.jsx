import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

const API_KEY = "YOUR_API_KEY_HERE"

const App = () => {
  const [genre, setGenre] = useState("action")
  const [movies, setMovies] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${genre}&type=movie`)
      .then(res => res.json())
      .then(data => setMovies(data.Search || []))
  }, [genre])

  return (
    <div>
      <h2>Movie Genre Picker</h2>
      {!selected ? (
        <>
          <select onChange={(e) => setGenre(e.target.value)}>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
          </select>
          <MovieList movies={movies} onSelect={setSelected} />
        </>
      ) : (
        <MovieDetail id={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
