import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axiosClient from "../config/axiosClient";


const ProductDetail = () => {
    const [product, setProduct] = useState ({})
    const params = useParams();
    const id = params.id;
    const getProduct = async () =>{
        try {
            const {data} = await axiosClient.get("/product/product"+id);
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    getProduct()
},[]);

    return (
      <>
        <p>DETALLE DE PRODUCTO</p>
        <h2>{product.name}</h2>
        <p>{product.abbreviation}</p>
      </>
    );
}
 
export default ProductDetail;