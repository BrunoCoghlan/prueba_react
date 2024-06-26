import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const Productos = ({ pizzas }) => {
  const { capitalizar, disminuir, aumentar, total, pagado } = useContext(PizzaContext)
  return (
    <div className='carrito'>
      <table className='container-fluid my-5 '>
        <thead>
          <tr>
            <th className='pb-4'>Detalles del pedido:</th>
          </tr>
        </thead>
        <tbody>
          {pizzas?.map((pizza) => {
            return (
              <tr key={pizza.id} className='border-bottom'>
                <td><img className='me-4 py-1' width='70' src={pizza.img} alt={pizza.name} />{capitalizar(pizza.name)}</td>
                <td className='d-flex flex-row gap-2 justify-content-center'>
                  <p className='m-1'>${pizza.price}</p>
                  <button onClick={() => disminuir(pizza.id)} className='btn btn-danger btn-carrito'>-</button>
                  <p className='m-1'>{pizza.count}</p>
                  <button onClick={() => aumentar(pizza.id)} className='btn btn-primary btn-carrito'>+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h2>Total:${total}</h2>
      <button onClick={pagado} className='btn btn-success'>ir a pagar</button>
    </div>
  )
}

export default Productos
