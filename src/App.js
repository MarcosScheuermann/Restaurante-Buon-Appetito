import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
import Layout from '../src/components/Layout/layout'
// import ProductsState from "./context/products/ProductsState";
import UserProvider from "./context/UserContext";
import CartProvider from './context/CartContext';
// import Admin from "./pages/Admin";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
// import ProductsState from "./context/products/ProductsState";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";

// import ProductDetail from "./pages/ProductDetail";
// import Products from "./pages/Products";
import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";
//import PublicRoute from "./routes/PublicRoute";
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import "./App.css";
// import PrivateRoute from "./routes/PrivateRoute";
// import AdminRoute from "./routes/AdminRoute";
// import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/Login";
import UserProvider from "./context/UserContext";
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";

function App() {
  return (
    <>
      <Router>
      <CartProvider>
      <UserProvider>
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
              <Route path="/" element={<Home />} />
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path='/producto' element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
            </Routes>
        </Layout>
        {/* </ProductsState> */}
      </UserProvider>
      </CartProvider>
    </Router>
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



