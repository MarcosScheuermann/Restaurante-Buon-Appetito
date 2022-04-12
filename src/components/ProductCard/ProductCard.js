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
  
  );
};

export default ProductCard;
