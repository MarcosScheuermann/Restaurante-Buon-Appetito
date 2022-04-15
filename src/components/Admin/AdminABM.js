import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import AddModal from "../AddModal/AddModal";

const AdminABM = () => {
  const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
      <p>SOY ADMINISTRADOR MARCOS</p>

      <Container className="right-block">
        <Button variant="dark" onClick={handleShow} className="m-3" >
          Agregar Productos
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Abreviacion</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.abbreviation}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddModal show={show} handleClose={handleClose} setProducts = {setProducts} products={products} />
        {products.map((product, index) => (
          <p key={index}>{product.name}</p>
        ))}
      </Container>
    </>
  );
}


export default AdminABM;
