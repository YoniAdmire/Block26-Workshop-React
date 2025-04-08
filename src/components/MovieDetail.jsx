import { useEffect, useState } from 'react'

const API_KEY = "YOUR_API_KEY_HERE"

const MovieDetail = ({ id, onBack }) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} width="150" />
      <p>{movie.Plot}</p>
    </div>
  )
}

export default MovieDetail
