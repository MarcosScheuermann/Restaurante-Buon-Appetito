import { useContext } from "react";
import { Container } from "react-bootstrap";
import AdminABM from "../components/Admin/AdminABM";
import { UserContext } from "../context/UserContext";

const Admin = () => {
  const {user}= useContext(UserContext);
  console.log(user);
    return (
    
      <Container className="mt-5">
        <h2>Tabla de Administracion</h2>
       <AdminABM />
      </Container>
    
  );
};

export default Admin;
