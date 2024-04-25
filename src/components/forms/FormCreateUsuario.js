import React, { useState } from 'react';

const FormularioRegistro = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [titulo, setTitulo] = useState('');
    const [clave, setClave] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [logLicen, setLogLicen] = useState('');
    const [logMovil, setLogMovil] = useState('');
    const [fono1, setFono1] = useState('');
    const [fono2, setFono2] = useState('');
    const [direccion, setDireccion] = useState('');
    const [idUsuarios, setIdUsuarios] = useState('');
    const [idComuna, setIdComuna] = useState('');
    const [idRegion, setIdRegion] = useState('');
    const [idProvincia, setIdProvincia] = useState('');
    const [email, setEmail] = useState('');
    const [sbase, setSbase] = useState('');
    const [liquido, setLiquido] = useState('');
    const [bruto, setBruto] = useState('');
    const [estado, setEstado] = useState('');

    // Función para manejar el envío del formulario
    const CreateUsuario = async (e) => {
        e.preventDefault();
        const data = {
            rut_post: rut,
            nom_post: nombre,
            paterno: paterno,
            materno: materno,
            nombre: nombre,
            titulo: titulo,
            clave: clave,
            fecha_nac: fechaNacimiento,
            tipo_doc: tipoDocumento,
            log_licen: logLicen,
            log_movil: logMovil,
            fono1: fono1,
            fono2: fono2,
            direccion: direccion,
            id_Usuarios: idUsuarios,
            id_comuna: idComuna,
            id_region: idRegion,
            id_provincia: idProvincia,
            email: email,
            sbase: sbase,
            liquido: liquido,
            bruto: bruto,
            estado: estado,
            created_at: new Date(),
            updated_at: new Date(),
        };
        // Aquí puedes hacer la solicitud a la API para enviar los datos
        try {
            const response = await fetch('http://127.0.0.1:8000/CreateUsuarios/CreateUsuario/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                // Manejar la respuesta exitosa
                console.log('Datos enviados correctamente');
            } else {
                // Manejar errores de la respuesta
                console.error('Error al enviar los datos');
            }
        } catch (error) {
            // Manejar errores de la solicitud
            console.error('Error:', error);
        }
    };

    return (
        <div class="max-w-4xl mx-auto">
            <form onSubmit={CreateUsuario} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="rut_post">
                        Rut:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rut"
                        type="text"
                        max={12}
                        placeholder="Rut"
                        value={rut}
                        onChange={(e) => setRut(e.target.value)}
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nom_post">
                        Nombre:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="paterno">
                        Apellido Paterno:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paterno"
                        type="text"
                        placeholder="Apellido Paterno"
                        value={paterno}
                        onChange={(e) => setPaterno(e.target.value)}
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="materno">
                        Apellido Materno:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="materno"
                        type="text"
                        placeholder="Apellido Materno"
                        value={materno}
                        onChange={(e) => setMaterno(e.target.value)}
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="clave">
                        Clave:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="clave"
                        type="password"
                        placeholder="Clave"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                    />

                </div>


                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioRegistro;

