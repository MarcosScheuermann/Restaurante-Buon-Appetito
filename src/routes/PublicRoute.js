<<<<<<< HEAD
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/home" /> : children;

};

=======
import {Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
  const user = localStorage.getItem('user');
  return ( 
    user? <Navigate to='/home'/> : children
  );
}
 
>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273
export default PublicRoute;
