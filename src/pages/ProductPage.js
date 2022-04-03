import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsProduct from '../components/DetailsProduct/DetailsProduct.js'

const ProductPage = () => {

    

    return (
        <Container className='m-5'>
            <Row>
                <Col xs={6}>
                    <img className='w-100' src='https://www.cocinayvino.com/wp-content/uploads/2018/08/pizza-napolitana-2-e1534286138178-1200x675.jpg'/>
                </Col>
                <Col xs={6}>
                    <DetailsProduct></DetailsProduct>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ProductPage;