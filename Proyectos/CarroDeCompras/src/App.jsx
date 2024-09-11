import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App () {
  const [products] = useState(initialProducts) // inicio de app con datos extraidos de la API manualmente (temporal)
  const { filterProducts, filters } = useFilters() // valores del  hook useFilters a utilizar

  const filteredProducts = filterProducts(products) // Lista de productos filtrados

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </CartProvider>
  )
}

export default App
