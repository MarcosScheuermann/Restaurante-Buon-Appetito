import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";
import Navbar from "../components/Header/Navbar";



export const FormContainer = styled.div`
widht:100vw
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`


const Login = () => {
    return ( 
        <>
        <Navbar/>
        <FormContainer>
        <LoginForm/>
        </FormContainer>
        </>
     );
}
 
export default Login;