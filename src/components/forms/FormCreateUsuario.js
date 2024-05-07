import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FormularioRegistro = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [titulo, setTitulo] = useState('0');
    const [clave, setClave] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('0');
    const [tipoDocumento, setTipoDocumento] = useState('0');
    const [logLicen, setLogLicen] = useState('0');
    const [logMovil, setLogMovil] = useState('0');
    const [fono1, setFono1] = useState('0');
    const [fono2, setFono2] = useState('0');
    const [direccion, setDireccion] = useState('0');
    const [idUsuarios, setIdUsuarios] = useState('0');
    const [idComuna, setIdComuna] = useState('0');
    const [idRegion, setIdRegion] = useState('0');
    const [idProvincia, setIdProvincia] = useState('0');
    const [email, setEmail] = useState('');
    const [sbase, setSbase] = useState('0');
    const [liquido, setLiquido] = useState('0');
    const [bruto, setBruto] = useState('0');
    const [estado, setEstado] = useState('0');

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

        try {
            const response = await axios.post('http://127.0.0.1:8000/PostUsuario/', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("respuesta: ", response.data)
            if (response.data === true) {


                setRut('');
                setNombre('');
                setPaterno('');
                setMaterno('');
                setTitulo('0');
                setClave('');
                setFechaNacimiento('0');
                setTipoDocumento('0');
                setLogLicen('0');
                setLogMovil('0');
                setFono1('0');
                setFono2('0');
                setDireccion('0');
                setIdUsuarios('0');
                setIdComuna('0');
                setIdRegion('0');
                setIdProvincia('0');
                setEmail('');
                setSbase('0');
                setLiquido('0');
                setBruto('0');
                setEstado('0');


                toast('Registro exitoso! 👍', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            } else {

                toast.error('Error al registrar el usuario! 😞', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            }

        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">

            <form onSubmit={CreateUsuario} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
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


                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormularioRegistro;


