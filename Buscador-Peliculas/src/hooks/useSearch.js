import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede hacer una busqueda vacia')
      return
    }

    if (search.length < 3) {
      setError('Minimo 3 caracteres para la busqueda')
      return
    }

    setError(null)
  }
  , [search])
  return { search, updateSearch, error }
}
