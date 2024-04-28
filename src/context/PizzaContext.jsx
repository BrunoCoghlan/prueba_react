import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  // invocando useStates
  const [pizzas, setPizzas] = useState()
  const [addCart, setAddCart] = useState([])
  const [total, setTotal] = useState()
  // declaracion funcion para agregar producto al carrito
  const agregar = (id) => {
    // buscando el objeto con el id pasado
    const i = addCart?.findIndex((pizza) => {
      return pizza.id === id
    })
    // se evalua si existe el objeto dentro del array, si no existe, se agrega al carrito y count +1, si existe, se le suma +1 a count
    if (i < 0) {
      const pizzaPedida = pizzas?.find((pizza) => {
        return pizza.id === id
      })
      pizzaPedida.count = 1
      setAddCart([...addCart, pizzaPedida])
    } else {
      setAddCart((addCart) => {
        addCart[i].count++
        return ([...addCart])
      })
    }
  }
  // se declaran funciones de aumentar y disminuir
  const aumentar = (id) => {
    const i = addCart?.findIndex((pizza) => {
      return pizza.id === id
    })
    setAddCart((addCart) => {
      addCart[i].count++
      return ([...addCart])
    })
  }
  const disminuir = (id) => {
    const i = addCart?.findIndex((pizza) => {
      return pizza.id === id
    })
    if (addCart[i].count <= 1) {
      return (
        setAddCart(() => {
          addCart.splice(i, 1)
          return ([...addCart])
        })
      )
    }
    setAddCart((addCart) => {
      addCart[i].count--
      return ([...addCart])
    })
  }
  // funcion para calcular el total a pagar
  useEffect(() => {
    let total = 0
    addCart.forEach((producto) => {
      total += producto.count * producto.price
    })
    setTotal(total)
  }, [addCart])
  // funcion de pagado
  const pagado = () => {
    if (addCart.length === 0) return window.alert('Que vas a pagar?, aun no elijes nada! vuelve con algo para la proxima')
    setAddCart([])
    window.alert('tu pedido llegara en 30 minutos o es gratis!')
  }
  // invocando al navigate para utilizarlo en cualquier view/layout
  const navigate = useNavigate()
  // declaracion de funcion getPizza para petizion asicrona a la API (local en este caso), se utiliza el manejo de error con try y catch.
  const getPizzas = async () => {
    try {
      const response = await fetch('src/pizzas.json')
      const pizzaApi = await response.json()
      setPizzas(pizzaApi)
    } catch (error) {
      console.log(error)
    }
  }
  // invocando useEffect para simular la peticion de una API externa (JSON es local), este invoca a getPizzas
  useEffect(() => {
    getPizzas()
  }, [])
  // funcion capitalizar string
  const capitalizar = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  // estados globales que seran compartidos con todos los componentes/view/layout necesarios
  const globalState = {
    pizzas,
    navigate,
    capitalizar,
    agregar,
    addCart,
    disminuir,
    aumentar,
    total,
    pagado

  }
  return (
    <PizzaContext.Provider value={globalState}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider
