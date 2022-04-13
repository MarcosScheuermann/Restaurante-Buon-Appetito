import './ShoppingCart.css'
import { ListGroup } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'

const CarritoCompra = () => {
    return (
        <Container>
            <h3>Resumen de Compra</h3>
            <Row>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex'>
                            <p className='me-5'>Nombre del producto</p>
                            <p>Precio</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    Hola
                </Col>
            </Row>
        </Container>
    );
}
 
export default CarritoCompra;