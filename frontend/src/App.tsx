import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import LoginUsuario from "./user/login";
import RegistroUsuario from "./user/registro";
import Home from "./home/Home";
import Footer from "./components/Footer/Footer";
import { EspecialistasPag } from "./user/ver-especialistas/ver-especialistas";
import { InfoAyudaPag } from "./user/informacion-ayuda/ver-info";
import { HistorialComponent } from "./user/historial-citas/historial";
import { EspecialistaPage } from "./user/ver-especialistas/ver-especialista/especialista";
import { CitasComponent } from "./user/citas/citas";
import { MyHorarioComponent } from "./user/my-horario/my-horario";
import { SolicitudesComponent } from "./user/solicitudes/solicitudes";
import { SerenityProvider } from "./shared/contexts/SerenityProvider";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SerenityProvider>
          <Routes>
            <Route path="/home" element={<Navbar />} />
            <Route path="/especialistas" element={<Navbar />} />
            <Route
              path="/especialistas/ver-especialista"
              element={<Navbar />}
            />
            <Route path="/info-ayuda" element={<Navbar />} />
            <Route path="/historial" element={<Navbar />} />
            <Route path="/citas" element={<Navbar />} />
            <Route path="/my-horario" element={<Navbar />} />
            <Route path="/solicitudes" element={<Navbar />} />
          </Routes>

          <Routes>
            <Route path="/" element={<LoginUsuario />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/especialistas" element={<EspecialistasPag />} />
            <Route
              path="/especialistas/ver-especialista"
              element={<EspecialistaPage />}
            />
            <Route path="/info-ayuda" element={<InfoAyudaPag />} />
            <Route path="/historial" element={<HistorialComponent />} />
            <Route path="/citas" element={<CitasComponent />} />
            <Route path="/my-horario" element={<MyHorarioComponent />} />
            <Route path="/solicitudes" element={<SolicitudesComponent />} />
          </Routes>

          <Routes>
            <Route path="/home" element={<Footer />} />
            <Route path="/especialistas" element={<Footer />} />
            <Route
              path="/especialistas/ver-especialista"
              element={<Footer />}
            />
            <Route path="/info-ayuda" element={<Footer />} />
            <Route path="/historial" element={<Footer />} />
            <Route path="/citas" element={<Footer />} />
            <Route path="/my-horario" element={<Footer />} />
            <Route path="/solicitudes" element={<Footer />} />
          </Routes>
        </SerenityProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
