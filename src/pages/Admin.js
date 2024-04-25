import React from 'react';
import { Redirect } from 'react-router-dom';

function AdminPage() {
  // Obtener el valor de la variable isLoggedIn del localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // Verificar si el usuario está autenticado
  if (isLoggedIn !== 'true') {
    // Si el usuario no está autenticado, redirigir al login
    window.location.href = '/login'; // Cambia '/login' por la ruta adecuada
  }

  // Si el usuario está autenticado, mostrar la página de administrador
  return (
    <div className="container">
      <h1>Admin Page</h1>
      {/* Aquí puedes agregar el contenido de tu admin page */}
    </div>
  );
}

export default AdminPage;
