// Uso actual: revisar el valor de los filtros
import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'
// Padre -> <Footer filters={filters} />
// Hijo -> export function Footer ({ filters }) {
// propdrilling
export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {
        // JSON.stringify(filters, null, 2) // para verificar los filtros
      }
      {
        JSON.stringify(cart, null, 2) // para verificar el carro de compras
      }
    </footer>
  )
}
