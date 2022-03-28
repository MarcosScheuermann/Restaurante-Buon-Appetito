<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import UserProvider from "./context/UserContext";
import Admin from "./pages/Admin/Admin";
import Contacto from "./pages/Contacto/Contacto";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Nosotros from "./pages/Nosotros/Nosotros";
import Productos from "./pages/Productos/Productos";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/contacto" element={<Contacto />} />

            <Route path="/nosotros" element={<Nosotros />} />

            <Route path="/productos" element={<Productos />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
>>>>>>> 6096d4b2be73d6fd377622dfd1f05630498e2728
  );
}

export default App;
