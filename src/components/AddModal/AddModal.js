import {Modal, Button, FloatingLabel, Form,} from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_PRODUCT_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import "./AddModal.css"

const AddModal = ({show, handleClose, setProducts, products }) => {
    const addProduct = async (info) => {
        try {
            const response = await axiosClient.post ("/products", info)
            setProducts(...products, response.data.productadd)
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
              label="Producto"
              className="mb-3 floating"
            >
              <Form.Control
                type="text"
                placeholder="Prod"
                onKeyUp={handleKeyUp}
                name="name"
                className=""
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Abreviacion"
              className="floating"
            >
              <Form.Control
                type="text"
                placeholder="productito"
                onKeyUp={handleKeyUp}
                name="abbreviation"
                className="mb-3"
              />
            </FloatingLabel>
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
 
export default AddModal;