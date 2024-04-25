import React from 'react';

import Registro from '../components/forms/FormCreateUsuario';

function Register() {
    return (

        <div className="w-full ">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto w-[450px] space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-4xl font-bold">Registro</h1>
                    </div>

                    {/* form Registro */}
                    <Registro />

                </div>
            </div>
        </div >

    );
}

export default Register;
