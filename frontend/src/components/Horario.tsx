import { Tooltip, Popconfirm } from 'antd'
import './Horario.css'
import { useParams } from 'react-router-dom';
import { createReserve } from '../shared/services/reserve.service';
import { useSerenityContext } from '../shared/contexts/SerenityProvider';

export function HorarioComponent(props){
    const { user } = useSerenityContext();
    const usuario = user.getUser();
    const userId = Number(usuario?.id)
    
    const dayName = props.day;
    const { id } = useParams();
    const clientId = Number(id)

    const date = (dayName) =>{
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayIndex = daysOfWeek.findIndex(day => day.toLowerCase() === dayName.toLowerCase());
        
        if (dayIndex === -1) {
          throw new Error('Nombre de día inválido');
        }
        
        const currentDate = new Date();
        
        const currentDayOfWeek = currentDate.getDay();
        const difference = dayIndex - currentDayOfWeek;
        
        if (difference === 0) {
          return currentDate; // El día proporcionado ya es el día actual
        } else if (difference > 0) {
          currentDate.setDate(currentDate.getDate() + difference);
        } else {
          currentDate.setDate(currentDate.getDate() + (7 + difference));
        }
        
        return currentDate;
    }

    const final = date(dayName)

    const buildReserva = () => {
        const reserva = {
          date: final, 
          description: 'Reserva',
          modality: 'DAY',
          state: 'INIT',
          clientId: clientId,
          userId: userId,
        };
        return reserva;
      };
    const handleReservar =async () => {
        try {
            const reserva = buildReserva();
            const newReserve = await createReserve(reserva);
            console.log('Reserva creada:', newReserve);
        }catch (error) {
            console.error('Error al crear reserva:', error);
            // Maneja el error según tus necesidades
          }
    };

    return(
        <div className="horario flex">
            <div className="horario__side w-2"></div>
            <div className="horario__datos w-full p-3 flex items-center justify-between">
                <div className="horario__horas font-medium">
                    {props.day}
                </div>
                <Tooltip title="Reservar">
                    <Popconfirm
                        key={1}
                        title="¿Está seguro de reservar este horario?"
                        onConfirm={handleReservar}
                        onCancel={() => console.log("cancel")}
                        okText="Sí"
                        cancelText="No"
                        okButtonProps={{ style: { background: '#2d3648' } }}
                    >
                        <button className="horario__button font-semibold h-10 w-24">
                            Reservar
                        </button>
                    </Popconfirm>
                </Tooltip>
            </div>
        </div>
    )
}