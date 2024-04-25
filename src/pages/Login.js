import React from 'react';

import FormLogin from '../components/forms/FormLogin';

function LoginPage() {
  return (

    <div className="w-full ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta</p>
          </div>

          {/* form login */}
          <FormLogin />

        </div>
      </div>
    </div >

  );
}

export default LoginPage;
