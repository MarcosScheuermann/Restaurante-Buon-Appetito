import "./LandingPage.css";
import chef from "../assets/LandingImg/chef.jpg";
import pizza from "../assets/LandingImg/pizza.jpg";
import front from "../assets/LandingImg/front.jpg";
import spaghetti from "../assets/LandingImg/spaghetti.jpg";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";


function LandingPage  ()  {
  return (
    
      <div className="App">
        <Hero imageSrc={chef}/>
        
        <Slider 
        imageSrc={pizza}
        title={"Explora sabores"}
        subtitle={"nuestro sabores son únicos!"}flipped={true}/>
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
