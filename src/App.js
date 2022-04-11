import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import LandingPage from "./pages/LandingPage";
=======
>>>>>>> ac054a868edfad827e20869b86bf15f2c2b3b302
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
<<<<<<< HEAD
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
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
import ProductsProvider from "./context/ProductsContext";
import AdminABM from "./components/Admin/AdminABM";
=======
import LandingPage from "./pages/LandingPage";
import PublicRoute from "./routes/PublicRoute";
>>>>>>> ac054a868edfad827e20869b86bf15f2c2b3b302

function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD
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
=======
      <UserProvider>
        {/* <ProductsState> */}
          <Layout>
            <Routes>
            <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
            </Routes>
        </Layout>
        {/* </ProductsState> */}
      </UserProvider>
    </Router>
>>>>>>> ac054a868edfad827e20869b86bf15f2c2b3b302
    </>
  );
}

export default App;



