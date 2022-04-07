import React from "react";
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return ( 
        <div className="hero">
            <img src={imageSrc} alt="Menu" className="hero__image" />
            <h1 className="hero__title">Bienvenidos a Bon Appetito</h1>
        </div>
     );
};
 
export default Hero;