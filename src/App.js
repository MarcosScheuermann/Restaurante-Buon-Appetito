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

function App() {
  return (
    <>
      <Router>
        <UserProvider>
            <Layout>
              <Routes>
                <Route path="*" element={<LandingPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/productos/:id" element={<ProductDetail />} />
              </Routes>
            </Layout>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;



