import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const NotFound = () => {
  const { navigate } = useContext(PizzaContext)
  return (
    <div className='p-5 text-center'>
      <h2>la pagina no se a encontrado! vuelve a Home para escojer unas de nuestas deliciosa pizzas!</h2>
      <button onClick={() => { navigate('/') }} className='btn btn-success'>Vuelve a Home</button>
    </div>
  )
}

export default NotFound
