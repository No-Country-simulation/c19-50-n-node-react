import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  //Funciones para Navegar
  const handleOnClickHome = () => {
    navigate('/home')
  }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#001f3f' }}>
      <Container>
        <Navbar.Brand>DescubreCBA</Navbar.Brand>
          <Nav className="d-flex flex-row justify-content-around">
            <Nav.Link onClick={handleOnClickHome} className='text-light m-2'>Inicio</Nav.Link>
            <Nav.Link className='text-light m-2'>Usuarios</Nav.Link>
            <Nav.Link className='text-light m-2'>Búsqueda</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}
