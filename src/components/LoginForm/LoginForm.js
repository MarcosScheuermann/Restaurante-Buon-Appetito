//LOGIN JUAN

import axios from 'axios';
import { useContext, useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { LOGIN_VALUES, URL_USERS } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { validationLogin } from '../../helpers/validations';
import useForm from '../../hooks/useForm';
import {BiUserPin} from 'react-icons/bi'
import './LoginForm.css'

const LoginForm = () =>{
  
  // const [error, setError] = useState(null); están en Hook useForm
  
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();
  console.log(setUser);

  const checkData = async ()=>{
    const response = await axios.get(URL_USERS);
    const {data} = response;
    const userFound = data.find(user=>user.email === values.email);
    console.log(userFound);
    if(userFound){
      if(userFound.password === values.password){
        localStorage.setItem('user',JSON.stringify(userFound));
        setUser(userFound);
        navigate('/productos');
      }else{
        setError(true)
      }
    }else{
      setError(true)
    }
  }
  
  const { handleKeyUp, handleSubmit, values, errors} = useForm(LOGIN_VALUES, validationLogin, login, checkData)
  
  return (
<div className="loginportada">
    <div className="login-portada-text">
    <BiUserPin className="login-icon"/>
    <Form className='w-25' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button className="login-button" type="submit">
        Ingresar
      </Button>
      {Object.keys(errors).length===0?null:
        Object.values(errors).map(error=><Alert variant='danger' className='mt-2'>error</Alert>)}

      {/* {Object.keys(errors).length!==0?<Alert variant='danger' className='mt-2'>Ingrese los datos correctamente</Alert>:null}
      {errors && <Alert variant='danger' className='mt-2'>Credenciales incorrectas</Alert>} */}
    </Form>
  </div>
</div>
  );
};

export default LoginForm;
