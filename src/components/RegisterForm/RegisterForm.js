//Register JUAN

// import axios from 'axios';
// import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// // import { URL_USERS } from '../../constants';
// import useForm from '../../hooks/useForm';
// // import useGet from '../../hooks/useGet';
// import Axiosclient from '../../config/axiosClient';
// import React, { useRef, useEffect, useState} from 'react';
// import { validateRegister } from '../../helpers/validations'
// import Mail from '../mail';
// import './RegisterForm.css'

// const RegisterForm = () => {
//   const initialValues={
//     name:'',
//     password:'',
//     email:''  
//   }
//   const navigate = useNavigate();

//   const chequear = async ()=>{
//     const users = await Axiosclient.get('/users');
//     const repeatedUser = users.find(user=>user.email === values.email);
//     if(repeatedUser){
//       alert('El mail ingresado ya existe')
//     }else{
//       setErrors(validateRegister(values))
//     if (!errors.email && !errors.name && !errors.lastname && !errors.password && !errors.password2 && !errors.role) {
//       alert('Registrar') 
//       // register(values);
//     }
//       // axios.post(URL_USERS,values);
//       // navigate('/login');
//     }
//   }

//   useEffect(() => {
//     chequear();  
//   }, []);



//   const [errors, setErrors] = useState({
//     name:null,
//     lastname:null,
//     country:null,
//     email: null,
//     password: null,
//     password2:null    
// })
// useEffect(() => {
// setErrors({
//     name:errors.name,
//     lastname:errors.lastname,
//     email:errors.email,
//     password:errors.password,
//     password2:errors.password2,
//     role:errors.role    
// })
// }, [errors.name,errors.lastname,errors.email,errors.password,errors.password2,errors.role])

// // const handleOnChange = (e) => {
// // setValues(
// //     {
// //         ...values,
// //         [e.target.name]: e.target.value
// //     }
// // )
// // }


//   const {values, handleKeyUp, handleSubmit}= useForm(initialValues,chequear);

//   return ( 
//     <Form className='w-25' onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicText">
//         <Form.Label>Nombre</Form.Label>
//         <Form.Control onKeyUp={handleKeyUp} type="text" placeholder="Ingresa tu nombre" name="name" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicText">
//         <Form.Label>Apellido</Form.Label>
//         <Form.Control onKeyUp={handleKeyUp} type="text" placeholder="Ingresa tu apellido" name="lastname" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
//         <Form.Text className="text-muted">
//         No compartiremos tu correo con nadie más.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Repite tu Password</Form.Label>
//         <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password2"/>
//       </Form.Group>
//       <DropdownButton id="dropdown-variants-secondary" variant='secondary' title="Rol" name="role">
//         <Dropdown.Item href="#/action-1">USER</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">ADMIN</Dropdown.Item>
//       </DropdownButton>
//       <br />
//       <Button className='register-button' type="submit">
//         Registrarme
//       </Button>
//       <Button className='mail-button' type="submit" onClick={navigate('/mail')}>
      
//         Mail
//       </Button>
    
//     </Form>
//   );
// }
 
// export default RegisterForm;

import axios from 'axios';
import {Form, Button, DropdownButton, Dropdown, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { URL_USERS } from '../../constants';
import useForm from '../../hooks/useForm';
// import useGet from '../../hooks/useGet';
import axiosClient from '../../config/axiosClient';
import React, { useRef, useEffect, useState} from 'react';
import { validateRegister } from '../../helpers/validations'
import Mail from '../mail';
import './RegisterForm.css'
import ModalRegister from '../ModalRegister/ModalRegister';

const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  // const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUsers = async () => {
    try {
      const response = await axiosClient.get("/users");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteProduct = async () => {
  //   try {
  //     await axiosClient.delete("products/" + selected);
  //     setProducts(products.filter((product) => product._id != selected));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

return (
  <>
    <Container className="right-block">
<Button variant="success" onClick={handleShow} className="m-3">
Agregar Usuario
</Button>
{/* <Button variant="danger" onClick={deleteProduct}>
Borrar Producto
</Button> */}

<ModalRegister
show={show}
setUsers={setUsers}
users={users}
handleClose={handleClose}
/>
</Container>
    </>
  );
};

export default RegisterForm;