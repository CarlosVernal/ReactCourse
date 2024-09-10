import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
// este hook personalizado hace uso del contexto, por lo que cada componente que lo use tendra acceso a los valores del mismo
export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext) // uso de contexto

  const filterProducts = products => {
    // filtrado de productos segun su precio y categoria
    return products.filter(product => {
      // prueba cada producto y solo retorna los que cumplen con las categorias solicitadas
      return (
        product.price <= filters.maxPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
