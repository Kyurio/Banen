
import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//estilos
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS



// Componentes
import Navbar from './components/navbar/navbar';

// Páginas
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';
import Register from './pages/Register';
import Details from './pages/Details';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/admin" element={<AdminPage />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/detalle" element={<Details />} /> 
      </Routes>
    </Router>
  );
}

export default App;
