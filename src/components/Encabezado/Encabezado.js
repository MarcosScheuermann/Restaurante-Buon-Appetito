import React from "react";
import "./Encabezado.css";
import LogoBuonAppetito from "../../assets/Logo/LogoBuonAppetito.png";

const Encabezado = ({imageSrc}) => {
    return ( 
        <div className="encab">
            

            <img src={imageSrc} alt="Menu" className="hero_image" />
            

            <h1 className="hero_title">  Bienvenido a Buon Appetito. <img src={LogoBuonAppetito} alt="Logo" className="logo" /></h1>
            
        </div>
     );
};
 
export default Encabezado;