import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import axios from 'axios';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Estilos
import 'aos/dist/aos.css';

// Componentes
import Navbar from './components/navbar/navbar';

// Páginas
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';
import Register from './pages/Register';
import Details from './pages/Details';
import Publicaciones from './pages/Publicaciones'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    // Simula el tiempo de carga de la página
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // ajusta este valor según tu tiempo de carga real

    // Limpia el timeout cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detalle" element={<Details />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
