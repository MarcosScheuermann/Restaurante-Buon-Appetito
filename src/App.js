import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
// import Contacto from "./pages/Contact";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./pages/Products";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/registro" element={<Register />} /> */}
              <Route path="/admin" element={<Admin />} />
              {/* <Route path="/contacto" element={<Contacto />} /> */}
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<LandingPage />} />
              <Route path="/productos" element={<Products />} />
              {/* <Route path="/contacto" element={<Contacto />} /> */}
              {/* <Route path="/producto" element={<ProductPage />} /> */}
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Layout>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
