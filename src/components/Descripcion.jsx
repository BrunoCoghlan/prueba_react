import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

const Descripcion = ({ pizzas }) => {
  // se extrae el id del URl
  const { id } = useParams()
  // se invoca el arreglo de pizzas
  const { capitalizar, agregar } = useContext(PizzaContext)
  // se busca la pizza seleccionada en un useState
  const searchPizzaIndex = pizzas?.findIndex((pizza) => {
    return pizza.id === id
  })
  return (
    <div className='card m-3 border d-flex flex-lg-row '>
      <img src={pizzas[searchPizzaIndex].img} className='card-img-top' alt={pizzas[searchPizzaIndex].name} />
      <div className='card-body '>
        <h5 className='card-title border-bottom pb-3 m-0'>{capitalizar(pizzas[searchPizzaIndex].name)}</h5>
        <p className='card-text'>{pizzas[searchPizzaIndex].desc}</p>
        <p><strong>Ingredientes</strong></p>
        <ul className='list-card'>
          {pizzas[searchPizzaIndex].ingredients?.map((ingredient) => {
            return <li key={ingredient}>🍕{capitalizar(ingredient)}</li>
          })}
        </ul>
        <p className='fs-3'>Precio: ${pizzas[searchPizzaIndex].price}</p>
        <div className='d-flex justify-content-end'>
          <button onClick={() => agregar(pizzas[searchPizzaIndex].id)} className='btn btn-danger'>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default Descripcion
