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
  );
}

export default App;
