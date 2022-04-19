import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import routes from '../routes';

export default function PaginaError (){
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{span:6, offset: 3}} className="text-center">
                    <img
                     style={{width: '100%'}}
                       src="/img/pagerror.jpg"
                       alt="error-404"/>
                <h2>ERROR 404</h2>
                <p>Por favor vuelve al <Link to={routes.homr}>inicio </Link></p>
                </Col>
            </Row>
        </Container>
    )
}