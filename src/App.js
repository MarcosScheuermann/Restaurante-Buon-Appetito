import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
=======
// import ProductsState from "./context/products/ProductsState";
>>>>>>> f59537729286a413dbda30dc367a2c87a5c58aed
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import "./App.css";
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
<<<<<<< HEAD
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<LandingPage />} />       
              <Route path="/productos" element={<Products />} />
                {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
              </Routes>
            </Layout>
          </ProductsProvider>
=======
              <Route path="/contacto" element={<Contacto />} /
              <Route path='/producto' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
<Route path="/AboutUs" element={<AboutUs />} />

                <Route path="*" element={<LandingPage />} />
                
       
                <Route path="/productos" element={<Products />} />
                   {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
            </Routes>
        </Layout>
              
               
           </ProductsProvider>
>>>>>>> f59537729286a413dbda30dc367a2c87a5c58aed
        </UserProvider>
      </Router>

    </>
  );
}

export default App;



