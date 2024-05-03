import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const Login = async (event) => {

        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/login/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            console.log("respuesta usuario", response);
            const data = await response.json();

            if (!response.ok || !data) {
                setError('Datos incorrectos!');
            } else {

                localStorage.setItem('isLoggedIn', 'true');
                navigate('/admin');

            }
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }

    };

    return (
        <form onSubmit={Login}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                    </label>
                    <input
                        id="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="mail@example.com"
                        required
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium leading-none">
                        Contraseña
                    </label>
                    <input
                        id="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit"
                >
                    Login
                </button>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            <div className="mt-4 text-center text-sm">
                <p>No tienes cuenta </p>
                <a className="underline" href="#">
                     Regístrate
                </a>
            </div>
        </form>
    );
};

export default FormLogin;
