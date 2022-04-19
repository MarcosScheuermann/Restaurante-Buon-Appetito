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

////////////////////////////////////////////////

import {Form, Button, DropdownButton, Dropdown, Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import axiosClient from '../../config/axiosClient';
import React, { useRef, useEffect, useState} from 'react';
import { validateRegister } from '../../helpers/validations'
import Mail from '../mail';
import './RegisterForm.css'
import ModalRegister from '../ModalRegister/ModalRegister';

const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

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

  const deleteUser = async () => {
    try {
      await axiosClient.delete("users/" + selected);
      setUsers(users.filter((user) => user._id != selected));
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container className="right-block">
        <Button variant="success" onClick={handleShow} className="m-3">
            Agregar Usuario
        </Button>
        <Button variant="danger" onClick={deleteUser}>
          Borrar Usuario
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              user._id == selected ? (
                <tr
                  key={user._id}
                  onClick={() => setSelected(user._id)}
                  className="selected users"
                >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.rol}</td>
                  <td>
                    <Link to={`/user/${user._id}`}>
                      Detalle de Usuario
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr
                  key={user._id}
                  onClick={() => setSelected(user._id)}
                  className="users"
                >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.rol}</td>
                  <td>
                    <Link to={`/user/${user._id}`}>
                      Detalle de Usuario
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
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




// import { useState, useEffect, useContext} from 'react'
// import Table from 'react-bootstrap/Table'
// import Button from 'react-bootstrap/Button'
// import FormEdit from '../FormEdit/FormEdit';
// // import MyModal from './../components/MyModal/MyModal'
// import ModalRegister from '../ModalRegister/ModalRegister';
// import { UserContext } from '../../context/UserContext';
// // import './../styles/UsersPage.css';

// const RegisterForm = () => {
//     const [modalShow, setModalShow] = useState(false);
//     const {getUsers, getUser, deleteUser,users} = useContext(UserContext) 
//     useEffect(() => {
//         getUsers();
//     }, [])

//     const handleDelete = (e)=>{
//         e.preventDefault();
//         deleteUser(e.target.parentElement.parentElement.id)
//     }
//     const handleEdit = (e)=>{
//         e.preventDefault();;
//         getUser(e.target.parentElement.parentElement.id)
//         setModalShow(true)
//     }
    
//     return (
//         <>
//             <div className='ml-4 mt-4'>
//                 <h3>Listado de usuarios</h3>
//                 <p>Acá se listan los usuarios registrados, con los botones ubicados en la parte derecha puede editar sus datos o borrarlos</p>
//             </div>
//             <div className='my-container d-flex'>
//                 <div className='w-100'>
//                     <Table striped bordered hover variant="dark" responsive='md'>
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Nombre</th>
//                                 <th>Apellido</th>
//                                 <th>País</th>
//                                 <th>Email</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.length === 0 ? (
//                                 <tr>
//                                     <td colSpan='4'>No hay usuarios registrados</td>
//                                 </tr>
//                             ) :
//                                 users.map((user, index) => (
//                                     <tr id={user._id} key={index}>
//                                         <td>{index}</td>
//                                         <td>{user.name}</td>
//                                         <td>{user.lastname}</td>
//                                         <td>{user.country}</td>
//                                         <td>{user.email}</td>
//                                         <td className='text-center'>
//                                             <Button onClick={handleEdit}>Editar usuario</Button>
//                                         </td>
//                                         <td className='text-center'>
//                                             <Button onClick={handleDelete}>Eliminar usuario</Button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </Table>
//                 </div>
//             </div>
//             <ModalRegister
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//                 body={FormEdit}
//                 modaltitle='Editar usuario'
//             />
//         </>
//     )
// }

// export default RegisterForm