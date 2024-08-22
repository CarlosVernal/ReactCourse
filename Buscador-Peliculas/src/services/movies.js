const ApiKey = 'e6dc0462'

export async function SearchMovie ({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movies => ({
      id: movies.imdbID,
      title: movies.Title,
      year: movies.Year,
      poster: movies.Poster
    }))
  } catch (error) {
    throw new Error('Error al buscar su pelicula')
  }
}
