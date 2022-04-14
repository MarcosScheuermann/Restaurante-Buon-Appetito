import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import { GET_PRODUCTS, URL_PRODUCTS } from "../../constants";
import { Button, Container, Table } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
// import useGet from "../../hooks/useGet";
import ProductsProvider from "../../context/ProductsContext";

const AdminABM = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
      <p>SOY ADMINISTRADOR</p>
    </>
  );
}


export default AdminABM;
