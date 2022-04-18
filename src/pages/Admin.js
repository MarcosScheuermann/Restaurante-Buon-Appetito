import { Container } from "react-bootstrap";
import AdminABM from "../components/Admin/AdminABM";

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
