import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard"; 
import {Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import axiosClient from "../config/axiosClient";

<<<<<<< HEAD
=======
import { Row, Col, Container } from "react-bootstrap";
<<<<<<< HEAD
import useGet from "../hooks/useGet";
=======
import useGet from "../hooks/useForm";
>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084
import ProductCard from "../components/ProductCard/ProductCard";
import { URL_PRODUCTS } from "../constants";
>>>>>>> LucasFerruchi-develop

const Products = () => {
 const[products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const response = await axiosClient.get('/products/product/');
            const {data} = response;
             setProducts(data);
          }catch (error){
              console.warn(error);
          }
        }
        getProducts();
    },[])
    return (
      <Container className="mt-5">        
        <Row xs={1} md={3} className="g-2">
        {products.map((product) => (
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
      </Container>
     );
}
 
export default Products;

