import { figure, carrousel, img, Button, ThemeProvider } from "react-bootstrap";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import React from "react";

export const AboutUs = () => {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <div>
          <Link to="/" className="btn btn-danger">
            Inicio
          </Link>
        </div>
        <h2>Diseñadores de Buon Appetito</h2>
        <div class="content-all">
          <div class="content-carrousel">
            <figure>
              <img src="./../assets/img/integrantes/Gastón Devalis.jpg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Devalis, Gastón</div>
                <p class="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
            <figure>
              <img src="./../assets/img/integrantes/Lucas Ferruchi.jpeg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Ferruchi, Lucas</div>
                <p class="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
            <figure>
              <img src="./../assets/img/integrantes/Marcos Scheuermann.jpeg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Scheuermann, Marcos</div>
                <p class="image__description">
                  Hobby: <br />
                  Pasear a Bruno
                </p>
              </div>
            </figure>
            <figure>
              <img src="./../assets/img/integrantes/Maria Fernanda Trujillo.jpg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Trujillo, M. Fernanda</div>
                <p class="image__description">
                  Hobby: <br />
                  Trekking
                </p>
              </div>
            </figure>

            <figure>
              <img src="./../assets/img/integrantes/Juan Ernesto Villegas.jpg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Villegas, Juan Ernesto</div>
                <p class="image__description">
                  Hobby: <br />
                  Fútbol - Trekking
                </p>
              </div>
            </figure>
            <figure>
              <img src="./../assets/img/integrantes/Gastón Devails.jpg" />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Devails, Gastón</div>
                <p class="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
          </div>
        </div>
      </ThemeProvider>
      ;
    </>
  );
};

export default AboutUs;
