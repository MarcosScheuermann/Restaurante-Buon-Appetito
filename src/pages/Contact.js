import ContactForm from "../components/ContactForm/ContactForm";
import styled from "styled-components";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export const FormContainer = styled.div`
widht:100vw
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`

const Contact = () => {
  return (
    <>
      <Navbar />
      <FormContainer>
        <ContactForm />
      </FormContainer>
      <Footer />
    </>
  );
};

export default Contact;