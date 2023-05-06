import  logo from '/public/svg/logo.svg' 
import "./Registro.css"

export default function RegistroUsuario () { 

    return (
        
        <div className="container">
            <div className='container-forms'>
                <div className="forms">
                    <div className='welcome'>
                    <img src={logo}  alt="" className="logo"/>
                    <p>Te damos la bienvenida a "Serenity", el espacio en línea dedicado a promover el bienestar emocional y psicológico de las personas.</p>
                    <div className='login-signup'>
                            <span className='text'>¿Ya estas registrado?
                            
                            </span>
                            <a href='/' className='text signup-text'>Clickea aquí.</a>
                        </div>
                    </div>
                    <div className="registro-form">
                        <form action='#'>
                            <div className='input-field'>
                                <label>Usuario:</label>
                                <input type='text' placeholder='Ingresa tu correo' required/>
                            </div>
                            <div className='input-field'>
                                <label>Correo:</label>
                                <input type='email' placeholder='Ingresa tu correo' required/>
                            </div>
                            <div className='input-field'>
                                <label>Contraseña:</label>
                                <input type='password' placeholder='Ingresa tu contraseña' required/>
                            </div>
                            <div className='input-field' id='date' >
                                <label>Fecha de Nacimiento:</label>
                                <input type='date' required/>
                            </div>
                            <div  id='type' >
                                <label>Registrarse como:</label>
                                <input type='radio' value="Paciente"/> Paciente
                                <input type='radio' value="Especialista" /> Especialista
                            </div>
                            <div className='input-field button'>
                                <input type='button' value="Iniciar Sesión"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )

}
