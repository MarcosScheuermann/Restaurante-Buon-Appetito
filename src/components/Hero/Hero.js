import React from "react";
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return ( 
        <div className="hero">
            <img src={imageSrc} alt="Menu" className="hero_image" />
            <h1 className="hero_title">Bienvenido a Bon Appetito.</h1>
        </div>
     );
};
 
export default Hero;