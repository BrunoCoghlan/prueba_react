import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

const Menu = () => {
  const { total } = useContext(PizzaContext)
  return (
    <Navbar className='menu' data-bs-theme='dark'>
      <Container>
        <NavLink className='navbar-brand' to='/'>🍕 Pizzeria Mamma mia!</NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className='nav-link active' to='/carrito'>🛒${total}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
