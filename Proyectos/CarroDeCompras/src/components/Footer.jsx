// Uso actual: revisar el valor de los filtros
import { useFilters } from '../hooks/useFilters'
import './Footer.css'
// Padre -> <Footer filters={filters} />
// Hijo -> export function Footer ({ filters }) {
// propdrilling
export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
