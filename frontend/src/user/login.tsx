import  logo from '/svg/logo.svg' 
import "./Login.css"
import { Link } from 'react-router-dom'



// function redirectTo(url: string): void {
//     window.location.href = url;
//   }
  

export default function LoginUsuario () { 

    // const handleClick = () => {
    //     redirectTo("/home");
    //   };

    return (
        
        <div className="container">
            <div className='container-forms'>
                <div className="forms">
                    <div className="form-login">
                        <img src={logo}  alt="" className="logo"/>
                        <form action='#'>
                            <div className='input-field'>
                                <label>Usuario:</label>
                                <input type='text' placeholder='Ingresa tu correo' required/>
                            </div>
                            <div className='input-field'>
                                <label>Contraseña:</label>
                                <input type='password' placeholder='Ingresa tu contraseña' required/>
                            </div>
                            <div className='input-field button'>
                                <Link to="/home">
                                    <input type='button' value="Iniciar Sesión"/>
                                </Link>
                            </div>
                        </form>
                        <div className='login-signup'>
                            <span className='text'>¿No estas registrado?
                            
                            </span>
                            <Link to="/registro">
                                <a  className='text signup-text'>Clickea aquí.</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}