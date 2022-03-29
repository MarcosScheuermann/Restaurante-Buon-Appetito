import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";

<<<<<<< HEAD
const FormContainer = styled.div`
width: 100vw;
height: 70vh;
`
const Login = () => {
    return (
      <FormContainer className="d-flex justify-content-center align-items-center">
        <LoginForm />
      </FormContainer>
=======
export const FormContainer = styled.div`
width:100vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
const Login = () => {
  return (
    <FormContainer>
      <LoginForm/>
    </FormContainer> 
>>>>>>> 1fc34cbd620d947e35f2ab9ef600059782a8b273
    );
}
 
export default Login;