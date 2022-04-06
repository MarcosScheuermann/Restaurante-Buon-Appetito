import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Contacto from "./pages/Contact";
import PublicRoute from "./routes/PublicRoute";

// import ProductsState from "./context/products/ProductsState";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Products from "./pages/Products";
//import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";



function App() {
  return (
    <>
      <Router>
      <UserProvider>
        {/* <ProductsState> */}
          <Layout>
            <Routes>
            <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
            <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/*<Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />*/}
              {/*<Route path="home" element={<Home />} />*/}
              {/* <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} /> */}
              {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
              {/* <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />*/}
              {/*<Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} /> */}
              {/* <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Productos />} /> */}
            </Routes>
        </Layout>
        {/* </ProductsState> */}
      </UserProvider>
    </Router>
    </>
  );
}

export default App;



