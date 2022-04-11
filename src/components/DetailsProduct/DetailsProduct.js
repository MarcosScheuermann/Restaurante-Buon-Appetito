import "./DetailsProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";


const DetailsProduct = () => {
    const handleCart = (e) => {
      e.preventDefault();
    }
        
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-danger">
          <h2>$20</h2>
        </Form.Text>
        <Form.Text className="text-dark">
          <h3>Nombre del producto</h3>
        </Form.Text>
        <Form.Text>
          <h6>Descripcion detallada del producto</h6>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Large" className="me-3" />
        <Form.Check type="checkbox" label="Medium" className="me-3" />
        <Form.Check type="checkbox" label="Small" className="me-3" />
      </Form.Group>
      <Button onClick={(e)=>{handleCart(e)}} variant='success' type="submit" className="me-3 cartButton">
        Agregar al Carrito
      </Button>
      <Button variant="secondary" className="me-3">
        Volver
      </Button>
    </Form>
  );
};

export default DetailsProduct;

/* 
        <>
        <div className='infoProduct mt-50'>
            <h2 className='text-danger'>$20</h2>
            <p>Descripcion del producto</p>
            <Button variant="success" className='w-25'>Agregar al Carrito</Button>{' '}
            <Button variant="primary" className='w-25'>Volver</Button>{' '}
        </div>
        </>
*/
