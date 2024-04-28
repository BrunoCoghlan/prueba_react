import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import { Home, Carrito, NotFound, Pizza } from './layout'

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
