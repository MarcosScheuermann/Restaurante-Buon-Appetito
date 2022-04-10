import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({id, title, price, image}) => {
  return (
    <Card id={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Precio: 200{price}</Card.Text>
        <Link variant="primary" to={`/productos/${id}`}className="btn btn-primary">Ver</Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
