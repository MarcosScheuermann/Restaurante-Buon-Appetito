import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/layout";
import UserProvider from "./context/UserContext";
import Admin from "./pages/Admin/Admin";
import Contacto from "./pages/Contacto/Contacto";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";

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

            <Route path="/productos" element={<Menu />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
