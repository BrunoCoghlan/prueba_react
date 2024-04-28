import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { PizzaContext } from '../context/PizzaContext'

const PizzaCard = ({ pizza }) => {
  const { capitalizar, navigate, agregar } = useContext(PizzaContext)
  const goToPizza = () => { navigate(`/pizza/${pizza.id}`) }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pizza.img} />
      <Card.Body>
        <Card.Title className='border-bottom pb-3 m-0'>{capitalizar(pizza.name)}</Card.Title>
        <p><strong>Ingredientes</strong></p>
        <ul className='list-card border-bottom pb-3 m-0'>
          {pizza.ingredients?.map((ingredient) => {
            return <li key={ingredient}>🍕{capitalizar(ingredient)}</li>
          })}
        </ul>
        <p className='fs-3 text-center'>${pizza.price}</p>
        <div className='d-flex justify-content-between'>
          <button onClick={goToPizza} className='btn btn-primary'>Ver Mas 👀</button>
          <button onClick={() => agregar(pizza.id)} className='btn btn-danger'>Añadir 🛒</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PizzaCard
