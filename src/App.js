import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";
//import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import ProductsProvider from "./context/ProductsContext";

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
            
             
              
            </Routes>
        </Layout>
        </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;



