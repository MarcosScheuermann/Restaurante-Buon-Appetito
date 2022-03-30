import CardPage from './pages/CardPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
