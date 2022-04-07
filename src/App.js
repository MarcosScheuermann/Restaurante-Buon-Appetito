import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import LandingPage from "./pages/LandingPage";
import PublicRoute from "./routes/PublicRoute";

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
            </Routes>
        </Layout>
        {/* </ProductsState> */}
      </UserProvider>
    </Router>
    </>
  );
}

export default App;



