import { Card, Button } from "react-bootstrap";
import './ProductCard.css';




const ProductCard = ({id,title,description,price}) => {
  return (
    <Card id={id} text="center" border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="card-top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="btn btn-outline-secondary">{price}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
