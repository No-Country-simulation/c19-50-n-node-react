import React from 'react'
import { Container } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <div className="text-center">
                <p>&copy; 2024 DescubreCBA. Todos los derechos reservados.</p>
            </div>
        </Container>
    </footer>
  )
}

