import React from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const navigate = useNavigate();
  
  const handleOnSubmit = () => {
    console.log("Hola")
  }

  const handleOnRegistrate = () => {
    navigate('/register');
  }
  return (
    <Form className='login p-1'>
        <Form.Label className='login-title'>Inicio</Form.Label>
          <Form.Group className='d-flex flex-column '>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className='d-flex justify-content-between'>
              <button className="login-boton m-1" onClick={() => handleOnSubmit()}>
                Entrar
              </button>
              <button className="login-boton m-1" onClick={() => handleOnRegistrate()}>
                Registrate
              </button>
            </Form.Group>
            <Form.Label className='p-3 mb-2 text-danger'></Form.Label>
          </Form.Group>
  </Form>
  )
}

export default Login