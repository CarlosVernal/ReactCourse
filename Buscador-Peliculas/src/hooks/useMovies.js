import { useCallback, useMemo, useRef, useState } from 'react'
import { SearchMovie } from '../services/movies.js'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => { // useCallbacks es para funciones
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(false)
      previousSearch.current = search
      const newMovies = await SearchMovie({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  , [search])

  const sortedMovies = useMemo(() => { // useMemo para calculos
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
