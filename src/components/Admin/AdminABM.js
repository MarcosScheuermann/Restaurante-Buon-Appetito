import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import { GET_PRODUCTS, URL_PRODUCTS } from "../../constants";
import { Button, Container, Table } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
// import useGet from "../../hooks/useGet";
import ProductsProvider from "../../context/ProductsContext";

const AdminABM = () => {
  const [products, setProducts] = useState([]);

  // const products = useGet(URL_PRODUCTS);

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



// const {products} = useContext (ProductsContext);


  // const handleDelete = async (e) => {
  //   const id = e.target.parentElement.parentElement.id;
  //   await axios.delete(URL_PRODUCTS +"/"+ id)
  // }
  return (
    <>
      <p>SOY ADMINISTRADOR</p>

      <table>
        {products.map((product, index) => (
          <tr>
            <td>
              <p key={index}>😭{product.id}</p>
            </td>
          </tr>
        ))}
      </table>
    </>
    // <>
    //   <Container>
    //     <Button className="mb-2">Alta de Producto</Button>
    //     <Table striped bordered hover>
    //         <thead>
    //             <tr>
    //                 <th>ID</th>
    //                 <th>NOMBRE</th>
    //                 <th>PRECIO</th>
    //                 <th>IMAGEN</th>
    //                 <th>ACCIONES</th>
    //             </tr>
    //         </thead>
    //       <tbody>
    //         {products.map(({ id, name, price, image }) => (
    //           <tr key={id} id={id}>
    //             <td>{id}</td>
    //             <td>{name}</td>
    //             <td>{price}</td>
    //             <td>{image}</td>
    //             <td>
    //               <Button variant="success" className="w-100 mb-2">Actualizar</Button>
    //               <Button variant="danger" className="w-100 mb-2" onClick={(e) => handleDelete(e)}>
    //                 Eliminar
    //               </Button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </Table>
    //   </Container>
    // </>
  );
}


export default AdminABM;
