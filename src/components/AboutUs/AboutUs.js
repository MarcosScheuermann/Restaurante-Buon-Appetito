import "./AboutUs.css";
import { Container} from "react-bootstrap";
import LucasImg from "./../../assets/Integrantes/Lucas Ferruchi.jpeg"


const AboutUs = () => {
    return (
        <Container>
        <h2>Diseñadores de Buon Appetito</h2>
        <div className="content-all">
            <div className="content-carrousel"> 
                  
                <figure><img src={LucasImg}/>
                    <div className="image__overlay image__overlay--primary">
                        <div className="image__title">Ferruchi, Lucas</div>
                        <p className="image__description">
                            Hobby: <br/>
                            Hacer deportes
                        </p>
                    </div>
                </figure>
                <figure><img src="./../assets/Integrantes/Marcos Scheuermann.jpeg"/>
                    <div className="image__overlay image__overlay--primary">
                        <div className="image__title">Scheuermann, Marcos</div>
                        <p className="image__description">
                            Hobby: <br/>
                            Pasear a Bruno
                        </p>
                    </div>
                </figure>
                <figure><img src="./../assets/Integrantes/Maria Fernanda Trujillo.jpg"/>
                    <div className="image__overlay image__overlay--primary">
                        <div className="image__title">Trujillo, M. Fernanda</div>
                        <p className="image__description">
                            Hobby: <br/>
                            Trekking
                        </p>
                    </div>                
                </figure>
                
                <figure><img src="./../assets/Integrantes/Juan Ernesto Villegas.jpg"/>
                <div className="image__overlay image__overlay--primary">
                    <div className="image__title">Villegas, Juan Ernesto</div>
                    <p className="image__description">
                        Hobby: <br/>
                        Fútbol - Trekking
                    </p>
                </div>
                </figure>   
                <figure><img src="./../assets/Integrantes/Gastón Devails.jpg"/>
                    <div className="image__overlay image__overlay--primary">
                        <div className="image__title">Devails, Gastón</div>
                        <p className="image__description">
                            Hobby: <br/>
                            Hacer deportes
                        </p>
                    </div>
                </figure>
                
            </div>
        </div> 
    </Container> 

);
}
 
export default AboutUs;