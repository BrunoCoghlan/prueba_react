import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import PizzaCard from './PizzaCard'

const CardList = () => {
  const { pizzas } = useContext(PizzaContext)
  return (
    <div className='d-flex flex-wrap pt-4 gap-3 justify-content-evenly'>
      {pizzas?.map((pizza) => {
        return (
          <PizzaCard key={pizza.id} pizza={pizza} />
        )
      })}
    </div>
  )
}

export default CardList
