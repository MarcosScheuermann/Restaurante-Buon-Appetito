import React from "react";
import "./Encabezado.css";
import LogoBuonAppetito from "./../../assets/img/Logo/Logo Buon Appetito.png";

const Encabezado = ({imageSrc}) => {
    return ( 
        <div className="encab">
            

            <img src={imageSrc} alt="Menu" className="hero_image" />
            

            <h1 className="hero_title"> <img src={LogoBuonAppetito} alt="Logo" className="logo" /> Bienvenido a Buon Appetito.</h1>
            
        </div>
     );
};
 
export default Encabezado;