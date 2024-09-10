import { Filters } from './Filters.jsx'

// En primera instancia se entregan las props a travez del componente hijo, esto sera reemplazado al utilizar el contexto
// al utilzar el contexto y ya no es necesario pasar los props al componente hijo o recivirlo del componente padre header({prop}) o Filters filters={prop} evitando asi el propdrilling

export function Header () {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters />
    </header>
  )
}
