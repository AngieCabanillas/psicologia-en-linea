import  logo from '/img/LogoBlanco.png' 
import "./Registro.css"
import { Link } from 'react-router-dom'

export default function RegistroUsuario() {

    return (

        <div className="container">
            <div className='container-forms'>
                <div className="forms">
                    <div className='welcome hidden md:flex'>
                        <img src={logo} alt="" className="logo-register block" />
                        <p>Te damos la bienvenida a "Serenity", el espacio en línea dedicado a promover el bienestar emocional y psicológico de las personas.</p>
                        <div className='login-signup flex'>
                            <span className='text'>¿Ya estas registrado?

                            </span>
                            <Link to="/">
                                <a href='/' className='text signup-text'>Clickea aquí.</a>
                            </Link>
                        </div>
                    </div>
                    <div className="registro-form fit-content">
                        <img src={logo} alt="" className="logo-register block md:hidden" />
                        <form action='#'>
                            <div className='input-field'>
                                <label>Usuario:</label>
                                <input type='text' placeholder='Ingresa tu correo' required />
                            </div>
                            <div className='input-field'>
                                <label>Correo:</label>
                                <input type='email' placeholder='Ingresa tu correo' required />
                            </div>
                            <div className='input-field'>
                                <label>Contraseña:</label>
                                <input type='password' placeholder='Ingresa tu contraseña' required />
                            </div>
                            <div className='input-field' id='date' >
                                <label>Fecha de Nacimiento:</label>
                                <input type='date' required />
                            </div>
                            <div id='type' >
                                <label>Registrarse como:</label>
                                <input type='radio' value="Paciente" /> Paciente
                                <input type='radio' value="Especialista" /> Especialista
                            </div>
                            <div className='login-signup flex md:hidden'>
                                <span className='text'>¿Ya estas registrado?
                                </span>
                                <Link to="/">
                                    <a href='/' className='text signup-text'>Clickea aquí.</a>
                                </Link>
                            </div>

                            <div className='input-field button'>
                                <Link to="/home">
                                    <input type='button' value="Iniciar Sesión" />
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )

}
