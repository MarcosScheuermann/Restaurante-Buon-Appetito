<<<<<<< HEAD
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const user = localStorage.getItem("user")
    
    return ( 
        user? children : <Navigate to="/"/>
     );
}
 
export default PrivateRoute;
=======
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const user = localStorage.getItem('user');
  return ( 
    user? children : <Navigate to='/'/>
   );
}
 
export default PrivateRoute;
>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273
