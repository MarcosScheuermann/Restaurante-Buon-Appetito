<<<<<<< HEAD
<<<<<<< HEAD

import LandingMain from "../components/LandingMain/LandingMain";
=======
import "./LandingPage.css";
=======
>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084
import chef from "../assets/LandingImg/chef.jpg";
import pizza from "../assets/LandingImg/pizza.jpg";
import front from "../assets/LandingImg/front.jpg";
import spaghetti from "../assets/LandingImg/spaghetti.jpg";
import Encabezado from "../components/Encabezado/Encabezado";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Header/Navbar";
<<<<<<< HEAD
>>>>>>> ac054a868edfad827e20869b86bf15f2c2b3b302
=======
import Footer from "../components/Footer/Footer";

>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084


<<<<<<< HEAD
<<<<<<< HEAD
const LandingPage = () => {
    return ( 
        
        <>
         <LandingMain/> 
        </>
       
        
    
=======
=======
>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084
function LandingPage  ()  {
  return (
    
      <div className="App">
        <Navbar/>

        <Encabezado imageSrc={chef}/>

        
        
        <Slider 
        imageSrc={pizza}
        title={"Explora los sabores"}
        subtitle={"dejate llevar por tus sentidos!"}flipped={true}/>
        <Slider imageSrc={front}
        title={"Como en casa"}
        subtitle={"todo en manos de nuestro chef!"}/>
        <Slider imageSrc={spaghetti}
        title={"Disfruta el momento"}
        subtitle={"crea recuerdos con las personas que quieres!"} flipped={true}/>

        <Footer/>
        
      </div>
    
  );
};
<<<<<<< HEAD
>>>>>>> ac054a868edfad827e20869b86bf15f2c2b3b302
=======
>>>>>>> 26b10385b1380a893b00ed04d0fbc994eb0c0084

export default LandingPage;
