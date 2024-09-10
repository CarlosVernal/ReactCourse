// Utilizando un contexto para evitar el prop drilling
import { createContext, useState } from 'react'
// contexto a consumir
export const FiltersContext = createContext()

// proveedor de acceso al contexto (valores y funciones)
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({ // estado que contiene los filtros
    category: 'all',
    maxPrice: 1000
  })

  // provee de los valores a todos los componentes hijos
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
