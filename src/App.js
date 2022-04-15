import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import React from 'react'; 
import AboutUs from "./components/AboutUs/AboutUs";  
import PrivateRoute from "./routes/PrivateRoute";

import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
              <Route path='/producto' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              <Route path="/aboutUs" element={<AboutUs />} />       

              
            </Routes>
        </Layout>
        </ProductsProvider>
      </UserProvider>
    </Router>
    </>
  );
}

export default App;
