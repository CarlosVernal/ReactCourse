import { useState, useEffect } from 'react'
import { getRandomImage } from '../Logics/facts'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // efecto para traer una imagen
  useEffect(() => {
    if (!fact) return
    getRandomImage(fact).then(catUrl => setImageUrl(catUrl))
  }, [fact])
  return { imageUrl }
}
