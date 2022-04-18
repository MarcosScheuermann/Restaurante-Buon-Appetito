import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/layout";
import UserProvider from "./context/UserContext";
import CartProvider from "./context/CartContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import React from 'react';
import AboutUs from "./components/AboutUs/AboutUs";
import Products from "./pages/Products";
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  return (
    <>
      <Router>
      <CartProvider> 
      <UserProvider>
      <ProductsProvider>
        {/* <ProductsState> */}
          <Layout>
            <Routes>
              {/* <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} /> */}
              {/* -- */}
              {/* <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} /> */}
              {/* <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} /> */}
               {/* -- */}
              {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
              {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> */}
              {/* <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />
              <Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} /> */}
              
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/home" element={<Home />} /> */}
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/registro" element={<Register />} /> */}
              <Route path="/admin" element={<Admin />} />
              
              <Route path='/productos/:id' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="*" element={<LandingPage />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/carrito" element={<ShoppingCart />} />
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
              {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
            </Routes>
            </Layout>
        {/* </ProductsState> */}
        </ProductsProvider>
      </UserProvider>
      </CartProvider>
    </Router>
    </>
    )}
export default App;
