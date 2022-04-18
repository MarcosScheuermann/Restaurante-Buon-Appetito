import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axiosClient from "../config/axiosClient";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import Products from "./Products";


const ProductDetail = () => {
    const [product, setProduct] = useState ({})
    const [products, setProducts] = useState([])
    const params = useParams();
    const id = params.id;
    const getProduct = async () =>{
        try {
            const {data} = await axiosClient.get("/products/product/"+id);
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    getProduct()
},[]);

console.log(product);

    return (
      <>
        <p>DETALLE DE PRODUCTO</p>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>NADA</p>
        {/* <Container className="mt-5">
          <Row xs={1} md={3} className="g-2">
            {product.map((product) => (
              <Col>
                <ProductCard
                  className="m-3"
                  id={product.id}
                  title={product.name}
                  description={product.description}
                  image={product.image}
                />
              </Col>
            ))}
          </Row>
        </Container> */}
      </>
    );
}
 
export default ProductDetail;