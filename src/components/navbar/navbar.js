import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Obtener el valor de la variable isLoggedIn del localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Función para manejar el logout
  const handleLogout = () => {
    // Eliminar la variable 'isLoggedIn' del localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = '/login'; // Cambia '/login' por la ruta adecuada
  };

  return (
    <nav className="flex justify-between px-20 py-10 items-center navbar">
      <h1 className="text-xl text-gray-800 font-bold">Banen</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* Cambiar el enlace de Login a Logout si isLoggedIn es true */}
          {isLoggedIn === 'true' ? (
            <li className="font-semibold text-gray-700">
              <a onClick={handleLogout}>Logout</a>
            </li>
          ) : (
            <li className="font-semibold text-gray-700">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
