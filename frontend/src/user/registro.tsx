import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "/img/LogoBlanco.png";
import "./Registro.css";
import { RegistroResolver } from "./registro.yup";
import { UserType } from "../shared/types/user.type";
import { useQuery } from "react-query";
import { createUser } from "../shared/services/user.service";

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const { handleSubmit, control, getValues } = useForm<Omit<UserType, "id">>({
    resolver: RegistroResolver,
    mode: "all",
    defaultValues: {
      name: "",
      lastName: "",
      rol: "",
      email: "",
      password: "",
    },
  });

  const { refetch } = useQuery(
    "query-login",
    async () => {
      return await createUser(getValues());
    },
    {
      enabled: false,
      onSuccess: () => {
        navigate("/login-user");
      },
    }
  );

  const iniciarSesion = () => {
    handleSubmit(() => {
      refetch();
    })();
  };

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
              <Link to="/login-user">
                <a href="/" className="text signup-text">
                  Clickea aquí.
                </a>
              </Link>
            </div>
          </div>
          <div className="registro-form fit-content">
            <img src={logo} alt="" className="logo-register block md:hidden" />
            <div className="input-field">
              <label>Nombre:</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Apellidos:</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Correo:</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu correo"
                    required
                  />
                )}
              />
            </div>

            <div className="input-field">
              <label>Contraseña:</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    value={field.value}
                    onChange={field.onChange}
                    type="text"
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                )}
              />
            </div>

            <div id="type" className="input-radio">
              <label>Registrarse como:</label>
              <Controller
                name="rol"
                control={control}
                render={({ field }) => (
                  <>
                    <select className="select" {...field}>
                      <option value="PSICOLOGIA" selected={field.value === "PSICOLOGIA"}>
                        Psicólogo
                      </option>
                      <option value="PSIQUIATRIA" selected={field.value === "PSIQUIATRIA"}>
                        Psiquiatra
                      </option>
                      <option value="TERAPIA OCUPACIONAL" selected={field.value === "TERAPIA OCUPACIONAL"}>
                        Terapeuta Ocupacional
                      </option>
                      <option value="TERAPIA FAMILIAR" selected={field.value === "TERAPIA FAMILIAR"}>
                        Terapeuta Familiar
                      </option>
                      <option value="PSICOTERAPIA" selected={field.value === "PSICOTERAPIA"}>
                        Psicoterapeuta
                      </option>
                    </select>
                    {/* <input
                      type="radio"
                      checked={field.value === "PSICOLOGO"}
                      onChange={field.onChange}
                      name="userType"
                      value="PSICOLOGO"
                    />{" "}
                    Psicologo
                    <input
                      type="radio"
                      checked={field.value === "PSIQUIATRA"}
                      onChange={field.onChange}
                      name="userType"
                      value="PSIQUIATRA"
                    />
                    Psiquiatra */}
                  </>
                )}
              />
            </div>

            <div className="input-field button">
              <input
                type="button"
                onClick={iniciarSesion}
                value="Regístrate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
