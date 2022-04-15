import { Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
// import AdminABM from "../components/Admin/AdminABM";

const Admin = () => {
  const {user}= useContext(UserContext);
  console.log(user.name);
    return (
    
      <Container className="mt-5">
        <h1>Tabla de Administracion</h1>
        <p>ABM de Productos</p>
        
       {/* <AdminABM /> */}
      </Container>
    
  );
};

export default Admin;
