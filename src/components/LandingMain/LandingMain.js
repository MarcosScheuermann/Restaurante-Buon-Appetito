import "./LandingMain.css";
import chef from "./../../assets/img/LandingImg/chef.jpg";
import pizza from "./../../assets/img/LandingImg/pizza.jpg";
import front from "./../../assets/img/LandingImg/front.jpg";
import spaghetti from "./../../assets/img/LandingImg/spaghetti.jpg";
import Encabezado from "./../Encabezado/Encabezado";
import Slider from "./../Slider/Slider";
import Navbar from "./..//Header/Navbar";

const navbarLinks = [
  { url: "#", title: "Ingresar" },
  { url: "#", title: "Contacto" },
  { url: "localhost:3000/AboutUs", title: "Nosotros" },
];

function LandingMain  ()  {
  return (
    
      <div className="App">
        <Navbar navbarLinks={navbarLinks} />

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
        
      </div>
    
  );
};

export default LandingMain;










// import { Carousel } from "react-bootstrap";
// import "./LandingMain.css";


// const LandingMain = () => {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <img
//           className="d-block w-100 carousel-image"
//           src="assets/img/photocarousel1.jpg"
//           alt="Cocina Italiana"
//         />
//         <Carousel.Caption>
//           <h3>Cocina Tradicional Italiana</h3>
//           <p>Elaborada con productos naturales y de la mejor calidad.                                 
//             No te pierdas de los exquisitos vinos, nos acompañan en la selección "DIVINOS"
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100 carousel-image"
//           src="assets/img/photocarousel2.jpg"
//           alt="Pizza Italiana"
//         />

//         <Carousel.Caption>
//           <h3>Variedad de Pizzas</h3>
//           <p>Resetas tradicionales que te trasladan a la Italia</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100 carousel-image"
//           src="assets/img/photocarousel3.jpg"
//           alt="Pasta Italiana"
//         />

//         <Carousel.Caption>
//           <h3>Pasta Squisita</h3>
//           <p>Inigualable sabor producto de la elaboración fresca</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };
// export default LandingMain;



/*const LandingMain = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__340.jpg"
            alt="PIZZAS RICAS"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://media.istockphoto.com/photos/delicious-italian-pizza-picture-id1031362212?k=20&m=1031362212&s=612x612&w=0&h=8AeA3Zbb8e7IEVdinEZUQo8hZqu9-ti6gW-qbs5fP64="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}*/
