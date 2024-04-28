import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Productos from '../components/Productos'

const Carrito = () => {
  const { addCart } = useContext(PizzaContext)
  return (
    <>
      <Productos pizzas={addCart} />
    </>
  )
}

export default Carrito
