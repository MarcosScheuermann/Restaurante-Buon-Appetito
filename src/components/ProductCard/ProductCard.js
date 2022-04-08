import { Card, Button } from "react-bootstrap";
import './ProductCard.css';


const ProductCard = ({id,title,description,image}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <card.id>{id}</card.id>
      <Card.Img variant="top" src={image} />
       <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="btn btn-outline-secondary">La Quiero</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
