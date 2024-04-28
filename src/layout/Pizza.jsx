import { useContext } from 'react'
import Descripcion from '../components/Descripcion'
import { PizzaContext } from '../context/PizzaContext'

const Pizza = () => {
  const { pizzas } = useContext(PizzaContext)
  return (
    <>
      {pizzas === undefined ? null : <Descripcion pizzas={pizzas} />}
    </>
  )
}

export default Pizza
