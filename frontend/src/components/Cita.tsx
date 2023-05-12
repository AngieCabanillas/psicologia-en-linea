import './Cita.css'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Popconfirm, Tooltip,} from 'antd';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export function CitaComponent(props){
    const cita = props.cita
    
    const fecha = new Date(cita.horario);
    const fechaFormateada = format(fecha, "EEEE dd 'de' MMMM, yyyy", { locale: es });
    const fechaFinal = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);


    return (
        <div className="cita flex col-span-2 md:col-span-1 w-3/4">
            <div className="cita__side w-3">
            </div>
            <div className="cita__content p-10 w-full flex flex-col md:flex-row items-center justify-between">
                <div className="cita__data">
                    <div className='cita__title text-lg font-semibold'>
                        {cita.especialista}
                    </div>
                    <div className='cita__paragraph text-base font-medium'>
                        {fechaFinal}
                    </div>
                </div>
                <div className="cita__actions flex gap-1 pl-0 mt-10 md:mt-0 md:pl-5">
                    <button onClick={() => props.showInfoModal({...cita, fechaFinal})} className={'cita__button cita__button--see w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'}>
                        <EyeOutlined />
                    </button>
                    {props.container && (
                        <button className='cita__button cita__button--edit w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'>
                            <EditOutlined />
                        </button>
                    )}
                    {props.container && (
                        <Tooltip title="Eliminar">
                            <Popconfirm
                                key={1}
                                title="¿Está seguro de eliminar este usuario?"
                                onConfirm={() => props.handleDelete(cita.id)}
                                onCancel={() => console.log("cancel")}
                                okText="Sí"
                                cancelText="No"
                                okButtonProps={{ style: { background: '#2d3648' } }}
                            >
                                <button className='cita__button cita__button--del w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'>
                                    <DeleteOutlined />
                                </button>
                            </Popconfirm>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    )

}