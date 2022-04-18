import {Modal, Button, FloatingLabel, Form, DropdownButton, Dropdown} from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { LOGIN_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
// import "./AddModal.css"

const ModalRegister = ({show, handleClose, setUsers, users }) => {
    const addUser = async (info) => {
        try {
            const response = await axiosClient.post ("/users", info)
            setUsers(...users, response.data.addUser)
        } catch (error) {
            console.log(error);
        }
    }
    const {handleSubmit, handleKeyUp} = useForm (LOGIN_VALUES, addUser);
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3 floating"
            >
              <Form.Control
                type="text"
                placeholder="Nombre"
                onKeyUp={handleKeyUp}
                name="name"
                className=""
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLastName"
              label="Apellido"
              className="floating"
            >
              <Form.Control
                type="text"
                placeholder="Apellido"
                onKeyUp={handleKeyUp}
                name="lastname"
                className="mb-3"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingEmail"
              label="Email"
              className="floating"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                onKeyUp={handleKeyUp}
                name="email"
                className="mb-3"
              />
            </FloatingLabel>    
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="floating"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onKeyUp={handleKeyUp}
                name="password"
                className="mb-3"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPasswordConfirm"
              label="Confirmación de Password"
              className="floating"
            >
              <Form.Control
                type="password"
                placeholder="Confirme su Password"
                onKeyUp={handleKeyUp}
                name="password2"
                className="mb-3"
              />
            </FloatingLabel>
            <DropdownButton id="dropdown-variants-secondary" variant='secondary' title="Rol" name="role">
              <Dropdown.Item href="#/action-1">USER</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ADMIN</Dropdown.Item>
           </DropdownButton>
            <Button
              className="m-1 modal-boton"
              type="submit"
              onClick={handleClose}
            >
              {" "}
              Agregar{" "}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    );
}
 
export default ModalRegister;