import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsState from "./context/products/ProductsState";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsState>
            <Layout>
              <Routes>
                <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
                <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
                <Route path="/contacto" element={<PublicRoute><Contacto /></PublicRoute>} />
                <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />
                <Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
              </Routes>
            </Layout>
          </ProductsState>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;



