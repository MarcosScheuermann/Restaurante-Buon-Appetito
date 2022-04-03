import { URL_PRODUCTS } from "../../constants";
import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";
import { useContext, useEffect } from "react";
import ProductsContext from "../../context/products/ProductContext";

const adminABM = () => {
  const {products, getProducts} = useContext (ProductsContext);
  useEffect(()=>{
    getProducts();
  },[])
  const handleDelete = async (e) => {
    const id = e.target.parentElement.parentElement.id;
    await axios.delete(URL_PRODUCTS +"/"+ id)
  }
  return (
    <>
      <Container>
        <Button className="mb-2">Alta de Producto</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>IMAGEN</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
          <tbody>
            {products.map(({ id, name, price, image }) => (
              <tr key={id} id={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{image}</td>
                <td>
                  <Button variant="success" className="w-100 mb-2">Actualizar</Button>
                  <Button variant="danger" className="w-100 mb-2" onClick={(e) => handleDelete(e)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default adminABM;
