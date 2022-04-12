<<<<<<< HEAD

import { Row, Col, Container } from "react-bootstrap";
// import useGet from "../hooks/useGet";
import ProductCard from "../components/ProductCard/ProductCard";
import { URL_PRODUCTS } from "../constants";

export const Products = () => {
  
  // const products = useGet (URL_PRODUCTS);
  
  return (

    <p>HOLA MARCOS</p>
    // <Container className="mt-5">
    //   <Row xs={1} md={3} className="g-4">
    //     <p>Lista de Productos</p>
    //     {products.map((product) => (
    //       <Col key={product.id}>
    //         <ProductCard
    //           id={product.id}
    //           title={product.name}
    //           image={product.image}
    //           price={product.price}
    //         />
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
};

export default Products;
=======
import axios from "axios";
import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard"; 
import {Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";


const Products = () => {
 const[products,setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const response = await axios.get('http://localhost:3500/products');
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
>>>>>>> 387afba713fa85bc528636a653fcb95e215cfc06
