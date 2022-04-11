import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
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
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<LandingPage />} />       
              <Route path="/productos" element={<Products />} />
                {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
              </Routes>
            </Layout>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;



