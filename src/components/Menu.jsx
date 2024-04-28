import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar className='menu' data-bs-theme='dark'>
      <Container>
        <NavLink className='navbar-brand' to='/'>🍕 Pizzeria Mamma mia!</NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className='nav-link' to='/carrito'>🛒aca iria un total, si lo tubiera!</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
