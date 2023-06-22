import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "/img/LogoBlanco.png";
import "./Registro.css";
import { RegistroResolver } from "./registro.yup";
import { UserType } from "../shared/types/user.type";

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Omit<UserType, "id">>({
    resolver: RegistroResolver,
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="container">
      <div className="container-forms">
        <div className="forms">
          <div className="welcome hidden md:flex">
            <img src={logo} alt="" className="logo-register block" />
            <p>
              Te damos la bienvenida a "Serenity", el espacio en línea dedicado
              a promover el bienestar emocional y psicológico de las personas.
            </p>
            <div className="login-signup flex">
              <span className="text">¿Ya estas registrado?</span>
              <Link to="/">
                <a href="/" className="text signup-text">
                  Clickea aquí.
                </a>
              </Link>
            </div>
          </div>
          <div className="registro-form fit-content">
            <img src={logo} alt="" className="logo-register block md:hidden" />
            <form action="#">
              <div className="input-field">
                <label>Nombre:</label>
                <input type="text" placeholder="Ingresa tu nombre" required />
              </div>
              <div className="input-field">
                <label>Apellidos:</label>
                <input
                  type="text"
                  placeholder="Ingresa tus apellidos"
                  required
                />
              </div>
              <div className="input-field">
                <label>Correo:</label>
                <input type="email" placeholder="Ingresa tu correo" required />
              </div>
              <div className="input-field">
                <label>Contraseña:</label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <div id="type">
                <label>Registrarse como:</label>
                <input type="radio" value="Paciente" /> Paciente
                <input type="radio" value="Especialista" /> Especialista
              </div>
              <div className="login-signup flex md:hidden">
                <span className="text">¿Ya estas registrado?</span>
                <Link to="/">
                  <a href="/" className="text signup-text">
                    Clickea aquí.
                  </a>
                </Link>
              </div>

              <div className="input-field button">
                <Link to="/home">
                  <input type="button" value="Iniciar Sesión" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
