import DetailsProduct from "../components/DetailsProducts/DetailsProducts";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosClient from '../config/axiosClient'

const ProductPage = () => {
  const [product, setProduct] = useState ('');

  

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container className="m-5">
      <Row>
        <DetailsProduct></DetailsProduct>
      </Row>
    </Container>
  );
};

export default ProductPage;
