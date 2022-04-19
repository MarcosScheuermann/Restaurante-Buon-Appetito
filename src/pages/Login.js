import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";
<<<<<<< HEAD

export const FormContainer = styled.div`
width:100vw;
=======
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";



export const FormContainer = styled.div`
widht:100vw
>>>>>>> LucasFerruchi-develop
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
<<<<<<< HEAD
const Login = () => {
  return (
    <FormContainer>
         <LoginForm/>
    </FormContainer> 
    );
=======


const Login = () => {
    return ( 
        <>
        <Navbar/>
        <FormContainer>
        <LoginForm/>
        </FormContainer>
        <Footer/>
        </>
     );
>>>>>>> LucasFerruchi-develop
}
 
export default Login;