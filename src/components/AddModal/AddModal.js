import {Modal, Button} from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_PRODUCT_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";

const AddModal = ({show, handleClose, setProducts }) => {
    const addProduct = async (info) => {
        try {
            const response = await axiosClient.post ("/products", info)
            setProducts(...products)
        } catch (error) {
            console.log(error);
        }
    }
    const {handleSubmit, handleKeyUp} = useForm (ADD_PRODUCT_VALUES, addProduct);
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre del Producto"
              className="mb-3 w-100"
            >
              <Form.Control
                type="text"
                placeholder="Prod"
                className="login-input w-100"
                onKeyUp={handleKeyUp}
                name="name"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Abreviacion">
              <Form.Control
                type="text"
                placeholder="productito"
                className="login-input"
                onKeyUp={handleKeyUp}
                name="abbreviation"
              />
            </FloatingLabel>
            <Button className="primary-button" type="submit">Agregar</Button>
            </form>
        </Modal.Body>
      </Modal>
    );
}
 
export default AddModal;