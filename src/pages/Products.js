
import { Row, Col, Container } from "react-bootstrap";
<<<<<<< HEAD
import useGet from "../hooks/useGet";
=======
import useGet from "../hooks/useForm";
>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084
import ProductCard from "../components/ProductCard/ProductCard";
import { URL_PRODUCTS } from "../constants";

export const Products = () => {
  
  const products = useGet(URL_PRODUCTS);
  
  return (
    <Container className="mt-5">
      <Row xs={1} md={3} className="g-4">
        <p>Lista de Productos</p>
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard
              id={product.id}
              title={product.name}
              image={product.image}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
