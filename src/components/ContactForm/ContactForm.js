//Formulario de Contacto FER

import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { URL_USERS } from "../../constants";
import useForm from "../../hooks/useForm";
import useGet from "../../hooks/useGet";
import "./ContactForm.css";

const ContactForm = () => {
  const initialValues={
    name:'',
    email:'',
    textarea:''
  }
  const navigate = useNavigate()
  const users = useGet(URL_USERS);
  const chequear = async ()=>{
    const repeatedUser = users.find(user=>user.email === values.email);
    if(repeatedUser){
      alert('Por favor, ingrese un email válido')
    }else{
      axios.post(URL_USERS,values);
      navigate('/landingPage'); //A este sitio?//
    }
  }
  const {values, handleKeyUp, handleSubmit}= useForm(initialValues,chequear);

return (
  <Form className='w-25' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="text" placeholder="Ingresa tu nombre" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          Tu correo nunca será compartido con nadie mas.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='contact-button' variant="primary" type="submit">
         Enviar 
      </Button>
  </Form>);

}

export default ContactForm;