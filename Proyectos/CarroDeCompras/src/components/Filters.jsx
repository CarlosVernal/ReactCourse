import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  // const [maxPrice, setMaxPrice] = useState(1000) //estado duplicado, existe un maximo local y un maximo global, lo reemplazamos por el valor que trae el contexto para evitar errores

  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  // funcion para actializar el precio maximo por el que se esta filtrando
  const handleChangeMaxPrice = event => { // recive el valor filters.maxPrice
    // setMaxPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }

  // funcion para actualizar la categoria a filtrar
  const handleChangeCategory = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  // seccion que contiene una barra para filtrar por precio y una lista de opciones para categorias
  return (
    <section className='filters'>
      <div>
        <label htmlFor={maxPriceFilterId}>Precio Maximo: </label>
        <input
          type='range'
          id={maxPriceFilterId}
          min='0'
          max='1000'
          value={filters.maxPrice} // fijamos el valor ya no como maxPrice para actualizarlo en onChange
          onChange={handleChangeMaxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value='all'>Todas</option>
          <option value='beauty'>Belleza</option>
          <option value='fragrances'>Perfumería</option>
        </select>
      </div>
    </section>
  )
}
