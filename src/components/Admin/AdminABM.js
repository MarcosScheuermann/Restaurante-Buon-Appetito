import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import AddModal from "../AddModal/AddModal";
import "./AdminABM.css" 

const AdminABM = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
const deleteProduct = async() => {
  try {
    await axiosClient.delete("products/"+ selected);
    setProducts(products.filter(product=>product._id!=selected))
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <p>SOY ADMINISTRADOR MARCOS</p>

      <Container className="right-block">
        <Button variant="dark" onClick={handleShow} className="m-3">
          Agregar Productos
        </Button>
        <Button variant="danger" onClick={deleteProduct}>Borrar Producto</Button>
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
              product._id==selected?
              <tr key={product._id} onClick= {()=>setSelected(product._id)} className="selected">
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.abbreviation}</td>
              </tr>:
              <tr key={product._id} onClick= {()=>setSelected(product._id)}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.abbreviation}</td>
              </tr>

            ))}
          </tbody>
        </Table>
        <AddModal
          show={show}
          handleClose={handleClose}
          setProducts={setProducts}
          products={products}
        />
      </Container>
    </>
  );
};

export default AdminABM;
