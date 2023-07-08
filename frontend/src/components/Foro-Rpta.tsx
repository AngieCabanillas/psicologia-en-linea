import { useEffect, useState } from "react";
import { ClientType } from "../shared/types/client.type";
import { UserType } from "../shared/types/user.type";
import { getUserByID } from "../shared/services/user.service";
import { getClientByID } from "../shared/services/client.service";
import { es } from "date-fns/locale";
import { format } from "date-fns";

type ComentarioType = {
    id: number;
    idForo: number;
    fecha: Date;
    comentario: string;
};

type ForoType = {
    id: number;
    title: string;
    idPersona: number;
    rol: string;
    fecha: Date;
    categoria: number;
    descripcion: string;
};

export const ForoRptaComponent = (props) => {
    const idForo = props.idForo
    console.log(idForo);
    const [publicacion, setPublicacion] = useState<ForoType>();
    const [persona, setPersona] = useState<ClientType|UserType>();
    const [comentarios, setComentarios] = useState<ComentarioType[]>();

    const foros: ForoType[] = [
        {
          id: 1,
          title: 'Problemas con mi mamá',
          idPersona: 1,
          rol: 'PACIENTE',
          fecha: new Date(),
          categoria: 2,
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.',
        },
        {
          id: 2,
          title: 'La falta de motivación tiene solución',
          idPersona: 1,
          rol: 'ESPECIALISTA',
          fecha: new Date(),
          categoria: 1,
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.',
        },
      ];

    // OBJETOS DE COMENTARIOOOS
    const listaza = []

    const getCliente = async (id: number): Promise<ClientType> => {
        try {
          const cliente = await getClientByID(id);
          return cliente.data as ClientType;
        } catch (error) {
          console.log("Algo anda mal" + error);
          throw error;
        }
      };

      const getEspecialista = async (id: number): Promise<UserType> => {
        try {
          const especialista = await getUserByID(id);
          return especialista.data as UserType;
        } catch (error) {
          console.log("Algo anda mal" + error);
          throw error;
        }
      };

    useEffect(() => {
        const foro = encontrarForoPorId(idForo!!);

        if (foro) {
            setPublicacion(foro)
            if (foro.rol === 'PACIENTE') {
                const fetchCliente = async () => {
                    const personaData = await getCliente(foro.idPersona)
                    setPersona(personaData)
                }   
                fetchCliente();
               
            } else {
                const fetchEspecialista = async () => {
                    const especialistaData = await getEspecialista(foro.idPersona)
                    setPersona(especialistaData);
                };
                fetchEspecialista();
            }
        }

        setComentarios(listaza)

    }, [comentarios]);

    const convertDate = (date: any) => {
        if (!date) {
          return "";
        }
    
        const fecha = new Date(date);
    
        if (isNaN(fecha.getTime())) {
          return "";
        }
    
        const fechaFormateada = format(fecha, "EEEE dd 'de' MMMM, yyyy", { locale: es });
        return fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      };
    

    const encontrarForoPorId = (idForo: string | number) => {
        const id = typeof idForo === 'string' ? parseInt(idForo) : idForo;
        return foros.find((foro) => foro.id === id);
      };
    
    return (
        <>
            {comentarios?.map((comentario) => {
                return(
                        <section className="foro-rpta w-full h-fit flex items-center gap-6 my-6">
                            <div className="rpta-profile w-36 justify-center hidden md:flex">
                                <div className="profile-pic relative ml-2 mr-4 w-16 h-16 rounded-xl ">
                                    <img className="object-cover rounded-xl ml-2 w-full h-full" src={publicacion?.rol === 'PACIENTE' ? "https://images.pexels.com/photos/2029239/pexels-photo-2029239.jpeg" : "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg"} alt="" />
                                    <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>{publicacion?.rol === 'PACIENTE' ? 'P' : 'E'}</div>
                                </div>
                            </div>
                            <div className="rpta-comentario rounded-xl bg-gray-100 w-full px-10 py-6">
                                <div className="rpta-data flex items-center">
                                    <div className="profile-pic relative mr-4 w-16 h-16 rounded-xl md:hidden">
                                        <img className="object-cover rounded-xl ml-2 w-full h-full" src={publicacion?.rol === 'PACIENTE' ? "https://images.pexels.com/photos/2029239/pexels-photo-2029239.jpeg" : "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg"} alt="" />
                                        <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>{publicacion?.rol === 'PACIENTE' ? 'P' : 'E'}</div>
                                    </div>
                                    <div className="data-user">
                                        <p className="profile-name text-md sm:text-lg font-semibold mb-1 ">{persona?.name + " " + persona?.lastName}</p>
                                        <p className="profile-time text-md sm:text-lg text-gray-300 ">{convertDate(comentario.fecha)}</p>
                                    </div>
                                </div>
                                <div className="rpta-paragraph mt-4 text-justify">
                                    <p>{comentario.comentario}</p>
                                </div>
                            </div>
                        </section>
                )
            })};
        </>
        
    )
}