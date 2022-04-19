import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import UserProvider from "./context/UserContext";
import React from 'react';
import AboutUs from "./components/AboutUs/AboutUs";
import PrivateRoute from "./routes/PrivateRoute";
import ProductDetail from "./routes/PrivateRoute"
import Layout from "./components/Layout/Layout";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Contact from "./pages/Contact"
import ProductsProvider from "./context/ProductsContext";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login /> }/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/products" element={<ProductCard />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>}/>
              </Routes>
            </Layout>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
    )}
export default App;
