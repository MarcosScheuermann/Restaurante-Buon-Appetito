import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";
//import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

import Admin from "./pages/Admin";
import CartPage from "./pages/CartPage";
//import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";


import ProductsProvider from "./context/ProductsContext";
//import Register from "./pages/Register";
//import Contacto from "./pages/Contact";
//import AdminABM from "./components/Admin/AdminABM";
// import ProductsState from "./context/products/ProductsState";
//import Home from "./pages/Home";
//import Nosotros from "./pages/AboutUs";
// import ProductDetail from "./pages/ProductDetail";
// import AdminRoute from "./routes/AdminRoute";
// import AdminRoute from "./routes/AdminRoute";





function App() {
  return (
    <>
      <Router>
      <UserProvider>
          <ProductsProvider>
        {/* <ProductsState> */}
          <Layout>
            <Routes>
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/AboutUs" element={<PublicRoute><AboutUs /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              {/*<Route path="/nosotros" element={<Nosotros />} />*/}
             
              {/*<Route path="/registro" element={<Register />} />*/}
              <Route path="/admin" element={<Admin />} />
              {/*<Route path="/contacto" element={<Contacto />} />*/}
              <Route path="/producto" element={<ProductPage/>} />
              <Route path='/carrito' element={<CartPage/>} />
              <Route path="/productos" element={<Products />} />
              {/*<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />*/}
              {/*<Route path="/productos" element={<Productos />} /> */}
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



