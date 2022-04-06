//import LandingMain from "../components/LandingMain/LandingMain";

import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import chef from "../assets/LandingImg/chef.jpg";
import pizza from "../assets/LandingImg/pizza.jpg";
import front from "../assets/LandingImg/front.jpg";
import spaghetti from "../assets/LandingImg/spaghetti.jpg";
import "../App.css";


const LandingPage = () => {
  return (
    
      <div className="App">
        <Hero imageSrc={chef}/>
        
        <Slider imageSrc={pizza}
        title={"Explora sabores"}
        subtitle={"nuestro sabores son únicos!"}/>
        <Slider imageSrc={front}
        title={"Explora sabores"}
        subtitle={"nuestro sabores son únicos"}/>
        <Slider imageSrc={spaghetti}
        title={"Explora sabores"}
        subtitle={"nuestro sabores son únicos"} flipped={true}/>
        
      </div>
    
  );
};

export default LandingPage;
