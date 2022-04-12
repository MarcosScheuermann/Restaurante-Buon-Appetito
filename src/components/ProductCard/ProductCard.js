<<<<<<< HEAD
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({id, title, price, image}) => {
  return (
    <Card id={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Precio: 900{price}</Card.Text>
        <Link variant="primary" to={`/productos/${id}`}className="btn btn-primary">Ver</Link>
      </Card.Body>
    </Card>
=======
import { Card, Button } from "react-bootstrap";
import './ProductCard.css';



const ProductCard = ({id,title,description,image}) => {
  return (
    
    <Card id={id} text= "center" border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="card-top" src={image} />
       <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="btn btn-outline-secondary">La Quiero</Button>
      </Card.Body>
    </Card>
  
>>>>>>> 387afba713fa85bc528636a653fcb95e215cfc06
  );
};

export default ProductCard;
