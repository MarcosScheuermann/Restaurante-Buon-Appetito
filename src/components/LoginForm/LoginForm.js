<<<<<<< HEAD
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import  axios  from "axios";

const LoginForm = () => {
 const [values, setValues] = useState({
     email:"",
     password:""
 })

const navigate = useNavigate();

const checkData = async () => {
    const response = await axios.get("http://localhost:3500/users");
    const {data} = response;
    const userFount = data.find(user=>user.email === values.email);
    if (userFount){
        if(userFount.password === values.password){
            localStorage.setItem("user", JSON.stringify(userFount));
            navigate("/home"); 
        }else{
          alert ("Credenciales incorrecta")
        }
    }else{
        alert ("Credenciales incorrecta")
   }
}

 const handleKeyUp = (e) => {
    setValues({
        ...values,
    [e.target.name] : e.target.value
    })
 }

 const handleSubmit = (e) => {
     e.preventDefault();
     checkData();
 }

  return (
    <Form className="w-25" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share youail with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
=======
import axios from 'axios';
import { useContext, useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { LOGIN_VALUES, URL_USERS } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { validateLogin } from '../../helpers/validations';
import useForm from '../../hooks/useForm';
import './LoginForm.css'

const LoginForm = () =>{
  const [error, setError] = useState(null);
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();
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
  
  const {values, handleKeyUp, handleSubmit} = useForm(LOGIN_VALUES, checkData)
  
  return (
    <Form className='w-25' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button className="login-button" type="submit">
        Ingresar
      </Button>
      {Object.keys(error).length!==0?<Alert variant='danger' className='mt-2'>Ingrese los datos correctamente</Alert>:null}
      {error && <Alert variant='danger' className='mt-2'>Credenciales incorrectas</Alert>}
>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273
    </Form>
  );
};

export default LoginForm;
