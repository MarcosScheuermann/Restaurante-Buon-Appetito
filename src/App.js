import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import "./App.css";
import Login from "./pages/Login";
import UserProvider from "./context/UserContext";
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
                <Route path="*" element={<LandingPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/productos" element={<Products />} />
              </Routes>
            </Layout>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;



