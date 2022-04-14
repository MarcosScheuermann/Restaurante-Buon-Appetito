import axios from "axios";
import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard"; 
import {Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import { URL_PRODUCTS } from "../constants";


const Products = () => {
 const[products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const response = await axios.get(URL_PRODUCTS);
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



//Juan

/*import { Container } from "react-bootstrap";

const Productos = () => {
    return ( 
        <Container className="mt-5">
    <h1>Productos</h1> 
    </Container>
     );
}
 
export default Productos;*/
