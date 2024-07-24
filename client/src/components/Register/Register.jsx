import React ,{ useState }from 'react';
import { Form } from 'react-bootstrap';
import './Register.css';

const Register = () => {

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmarPass, setConfirmarPass] = useState("");
  const [mensajes, setMensajes] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && surName !== '' && email !== '' && pass !== '' && confirmarPass !=''){
      //Invocar a API
      setMensajes("Fue a validar...");
    } else {
      setMensajes("Debe completar todos los campos...");
    }
    
  }

  const onChangeName = (val) => { setName(val)}
  const onChangeSurName = (val) => { setSurName(val)}
  const onChangeEmail = (val) => { setEmail(val)}
  const onChangePass = (val) => { setPass(val)}
  const onChangeConfirmarPass = (val) => { setConfirmarPass(val)}


  return (
    <Form className='Register p-1'>
        <Form.Label className='Register-title'>Registro</Form.Label>
          <Form.Group className='d-flex flex-column '>

            <Form.Group className="mb-3 " controlId="name">
              <Form.Label className="fw-bold">Nombre</Form.Label>
              <Form.Control type="text"  placeholder="nombre..." required onChange={(e) => onChangeName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname">
              <Form.Label className="fw-bold">Apellido</Form.Label>
              <Form.Control type="text"  placeholder="apellido..." required onChange={(e) => onChangeSurName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email"  placeholder="email..." required onChange={(e) => onChangeEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="pass">
              <Form.Label className="fw-bold">Contraseña</Form.Label>
              <Form.Control type="password"  placeholder="password..." required onChange={(e) => onChangePass(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmarpass">
              <Form.Label className="fw-bold">Confirmar contraseña</Form.Label>
              <Form.Control type="password"  placeholder="confirmar contraseña..." required onChange={(e) => onChangeConfirmarPass(e.target.value)} />
            </Form.Group>

              <button type="submit" className="Register-boton m-1" onClick={handleOnSubmit}>
                Confirmar
              </button>

            <Form.Label className='p-3 mb-2 text-danger'>{mensajes}</Form.Label>
          </Form.Group>
  </Form>
  )
}

export default Register