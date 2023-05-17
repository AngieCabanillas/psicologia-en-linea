import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import logo from "/svg/logo.svg";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className="logo-nav" />

      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="button-group">
        <NavLink to="/cerrar-sesion">
          <Button buttonStyle="btn-outline">Cerrar Sesión</Button>
        </NavLink>
        <div className="espacio-entre-componentes"></div>
        <NavLink to="/info-ayuda">
          <Button buttonStyle="btn-primary">Información de Ayuda</Button>
        </NavLink>
      </div>
    </nav>
  );
}

// interface MenuItem {
//   title: string,
//   url: string,
//   cName: string
// }

// function CustomLink (props: MenuItem) {

//   const resolvedPath = useResolvedPath(props.url)

//   return (
//     <li key={index}>
//           <NavLink className={item.cName} to={item.url}>
//           {item.title}
//           </NavLink>
//         </li>
//       )

// }
