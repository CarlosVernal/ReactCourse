import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
// const MovieApi = 'http://www.omdbapi.com/?apikey=e6dc0462'

function App () {
  const [sort, setSort] = useState(false)

  const { error, search, updateSearch } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500),
    []
  )

  function handleSubmit (event) {
    event.preventDefault()
    if (error) return
    getMovies({ search })
  }

  function handleChange (event) {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
    // getMovies({ search: newSearch }) // busqueda mientras se escribe
  }

  function handleSort () {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              onChange={handleChange}
              value={search}
              name='query'
              type='text'
              placeholder='The matrix, Terminator, MadMax,...'
            />
            <input onChange={handleSort} type='checkbox' checked={sort} />
            <button type='submit'>Buscar</button>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
