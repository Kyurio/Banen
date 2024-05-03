import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Obtener el valor de la variable isLoggedIn del localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Función para manejar el logout
  const handleLogout = () => {
    // Eliminar la variable 'isLoggedIn' del localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = '/login'; // Cambia '/login' por la ruta adecuada
  };

  return (
    <nav className="flex justify-between px-20 py-10 items-center navbar">
      <h1 className="text-xl font-bold">Banen</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* Mostrar el enlace de Login o Logout según si el usuario ha iniciado sesión */}
          {isLoggedIn ? (
            <>
              <li className="font-semibold text-gray-700">
                <a onClick={handleLogout}>Logout</a>
              </li>
              <li className="font-semibold text-gray-700">
                <Link to="/admin">Perfil</Link>
              </li>
            </>
          ) : (
            <li className="font-semibold text-gray-700">
              <Link to="/login">Login</Link>
            </li>
          )}
          <li className="font-semibold text-gray-700">
            <Link to="/admin">Trabajos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
