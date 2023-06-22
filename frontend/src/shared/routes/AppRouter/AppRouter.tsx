import { Route } from "react-router-dom";

import AppSwitch from "../AppSwitch";
import GuestRouteUser from "../GhestRoutesUser";
import ProtectedRoutesUser from "../ProtectedRoutesUser";

import paths from "../paths";

import NotFound from "../../../NotFound";
import LoginUsuario from "../../../user/login";
import Home from "../../../home/Home";
import { InfoAyudaPag } from "../../../user/informacion-ayuda/ver-info";
import { CitasComponent } from "../../../user/citas/citas";
import { MyHorarioComponent } from "../../../user/my-horario/my-horario";
import { SolicitudesComponent } from "../../../user/solicitudes/solicitudes";
import RegistroUsuario from "../../../user/registro";

const AppRouter = () => {
  return (
    <AppSwitch>
      {/* <Route path={paths.app.login} element={<LoginUsuario />} /> */}
      <Route path={paths.general.notFound} element={<NotFound />} />

      {/* CLIENT */}
      {/* <Route element={<GuestRoute pathname={paths.app.root} />}>
        <Route path={paths.dash.login} element={<DashLogin />} />
      </Route>
      <Route element={<ProtectedRoutes pathname={paths.dash.login} />}>
        <Route path={paths.dash.root} element={<DashHome />} />
        <Route path={paths.dash.clientes} element={<DashboardCustomers />} />
        <Route path={paths.dash.gestiones} element={<div>gestiones</div>} />
        <Route path={paths.dash.reportes} element={<div>reportes</div>} />
      </Route> */}

      {/* USER */}
      <Route element={<GuestRouteUser pathname={paths.user.home} />}>
        <Route path={paths.user.login} element={<LoginUsuario />} />
        <Route path={paths.user.registro} element={<RegistroUsuario />} />
      </Route>
      <Route element={<ProtectedRoutesUser pathname={paths.user.login} />}>
        <Route path={paths.user.home} element={<Home />} />
        <Route path={paths.user.infoAyuda} element={<InfoAyudaPag />} />
        <Route path={paths.user.citas} element={<CitasComponent />} />
        <Route path={paths.user.myHorario} element={<MyHorarioComponent />} />
        <Route
          path={paths.user.solicitudes}
          element={<SolicitudesComponent />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </AppSwitch>
  );
};

export default AppRouter;
