import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return ( 
        <p>Error 404,<Link to="/">Vuelve a la página anterior</Link></p>
     );
}
 
export default ErrorPage;