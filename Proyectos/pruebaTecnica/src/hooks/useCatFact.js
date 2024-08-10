import { useState, useEffect } from 'react'
import { getRandomFact } from '../Logics/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(setFact) // setFact === newFact => setFact(newFact)
  }

  // efecto para traer un dato aleatorio
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
