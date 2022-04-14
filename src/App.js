import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact"; //Fer//
import Home from "./pages/Home";
import Products from "./pages/Products";  //Fer//
import React from 'react'; //Fer//

import './App.css'; //Fer//






// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
// import ProductsState from "./context/products/ProductsState";
// import Admin from "./pages/Admin";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
//import Nosotros from "./pages/AboutUs";
//import Productos from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
//import Register from "./pages/Register";
// import AdminRoute from "./routes/AdminRoute";
//import PrivateRoute from "./routes/PrivateRoute";
//import PublicRoute from "./routes/PublicRoute";






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
               <Route path="/contact" element={<Contact />} /> {/*Fer*/}
               <Route path="/productos" element={<Products />} />  {/*Fer*/}
               
               


              




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



