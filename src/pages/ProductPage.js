import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsProduct from '../components/DetailsProduct/DetailsProduct.js'

const ProductPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={6}>
                    <img className='w-100' src='https://img2.freepng.es/20180507/qww/kisspng-sicilian-pizza-neapolitan-pizza-pizza-margherita-t-5af1168b92f4e8.3388919715257493876019.jpg'/>
                </Col>
                <Col xs={6}>
                    <DetailsProduct></DetailsProduct>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ProductPage;