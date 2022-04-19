import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
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
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
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



