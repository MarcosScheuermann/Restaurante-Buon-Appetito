import { Container } from "react-bootstrap";
import AdminABM from "../components/Admin/AdminABM";

const Admin = () => {
  return (
    
      <Container className="mt-5">
        <h1>Tabla de Administracion</h1>
        <p>ABM de Productos</p>
        <AdminABM />
      </Container>
    
  );
};

export default Admin;
