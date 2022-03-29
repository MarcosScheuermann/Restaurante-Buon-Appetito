//Footer Lucas
import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Buon Appetito</h4>
            <ui className="list-unstyled">
              <li>381-3333339</li>
              <li>San Miguel, Tucuman</li>
              <li>Calle Maipú 333</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Atención</h4>
            <ui className="list-unstyled">
              <li>LUN-VIER</li>
              <li>09:00-21:00</li>
              <li>SAB-DOM 09:00-14:00</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>REDES SOCIALES</h4>
            <ui className="list-unstyled">
              <li>INSTG</li>
              <li>FACEB</li>
              <li>---</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BUON APPETITO | Todos los derechos reservados | Privacidad
          </p>
        </div>
      </div>
    </div>
  )};

export default Footer;