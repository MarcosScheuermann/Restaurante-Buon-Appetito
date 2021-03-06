import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
import Layout from "./components/Layout/Layout";
// import ProductsState from "./context/products/ProductsState";
import UserProvider from "./context/UserContext";
// import Admin from "./pages/Admin";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contacto from "./pages/Contact";
import Home from "./pages/Home";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";

// import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";  //Fer//
import React from 'react'; //Fer//


//import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";
//import PrivateRoute from "./routes/PrivateRoute";
//import PublicRoute from "./routes/PublicRoute";
//import ContactForm from "./pages/ContactForm";    Fer
import './App.css';





function App() {
  return (
    <>
      <Router>
      <UserProvider>
       {/*<ProductsState>}/>*/}
          <Layout>
            <Routes>
               <Route path="*" element={<LandingPage />}/>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/admin" element={<Admin />} />
               <Route path="/contacto" element={<Contacto />} />
               <Route path="/productos" element={<Products />} />  {/*Fer*/}
               {/*<Route path= "/formulario" element={<ContactForm/>} />*/} {/*Fer*/}
               


               {/*<Route path="/productos" element={<Productos} />} */}




               {/*<Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} /> */}
             
              {/* -- */}
              {/* <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} /> */}
              {/* <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} /> */}
               {/* -- */}
              {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
              {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> */}
             
             
        
              
              {/* <Route path="/nosotros" element={<Nosotros />} />*/}
              
            </Routes>
        </Layout>
        {/* </ProductsState> */}
      </UserProvider>
    </Router>
    </>
  );
}

export default App;



